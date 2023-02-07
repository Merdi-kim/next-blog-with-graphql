import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { PostCard, PostWidget } from '../components';
import { getPosts } from '../services/graphql';
import { allPosts, specificPosts } from '../services/store';
import { IPostNode } from '../types';

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [, setPosts] = useRecoilState(allPosts);
  const [postsToDisplay, setPostsToDisplay] = useRecoilState(specificPosts);

  useEffect(() => {
    setPosts(posts);
    setPostsToDisplay(posts);
  }, []);

  return (
    <div className="w-full mb-8 px-6 sm:px-16">
      <Head>
        <title>Merkim blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-1">
          {postsToDisplay.map((post: IPostNode) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: IPostNode[] = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
