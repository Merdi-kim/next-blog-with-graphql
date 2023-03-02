import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { PostCard, PostWidget } from '../components';
import NoPostsPlaceholder from '../components/NoPostsPlaceholder';
import { getPosts } from '../services/graphql';
import { allPosts, specificPosts } from '../services/store';
import { IPostNode } from '../interfaces';

const Home: NextPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [, setPosts] = useRecoilState(allPosts);
  const [postsToDisplay, setPostsToDisplay] = useRecoilState(specificPosts);

  useEffect(() => {
    setPosts(posts);
    setPostsToDisplay(posts);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] pt-8 mb-8 px-6 sm:px-16 bg-blue text-white">
      <Head>
        <title>Merdi kim blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Software engineering blog for all tips and tricks about web development and blockchain development"
        />
        <meta
          name="keywords"
          content="Frontend development, backend development, software engineering, web development"
        />
        <meta name="author" content="Merdi Kim" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {postsToDisplay.length > 0 ? (
          <div className="lg:col-span-8 col-span-1">
            {postsToDisplay.map((post: IPostNode, index: number) => (
              <PostCard key={post.node.title} index={index} post={post.node} />
            ))}
          </div>
        ) : (
          <div className="lg:col-span-8 col-span-1">
            <NoPostsPlaceholder />
          </div>
        )}
        <div className="hidden lg:block lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts: IPostNode[] = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
