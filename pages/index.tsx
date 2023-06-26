import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import { PostCard, PostWidget } from '../components';
import NoPostsPlaceholder from '../components/NoPostsPlaceholder';
import { getPosts } from '../services/graphql';
import { IPostNode } from '../interfaces';

const Home: NextPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="w-full min-h-[calc(100vh-8rem)] pt-8 mb-8 px-6 sm:px-16 bg-blue text-white">
      <Head>
        <title>Merdi kim | Software engineering blog</title>
        <link rel="icon" href="/profile.ico" />
        <meta
          name="description"
          content="Software engineering blog for all tips and tricks about software engineering and blockchain development"
        />
        <meta
          name="keywords"
          content="Frontend development, backend development, software engineering, web development"
        />
        <meta name="author" content="Merdi Kim" />
      </Head>
      <div className="w-full mb-10 h-32 md:h-44 flex items-center justify-center">
        <p className="text-2xl lg:text-4xl font-bold text-center">
          <Typewriter
            options={{
              strings: ['Blockchain, Cloud, Software engineering, ...'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {posts.length > 0 ? (
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post: IPostNode, index: number) => (
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
