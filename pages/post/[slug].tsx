import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getPosts, getPostDetails } from '../../services/graphql';
import { PostDetail, PostWidget, Author } from '../../components';
import Head from 'next/head';

function Post({ postDetails }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="mx-auto px-6 sm:px-16 md:px-32 lg:px-16 mb-8">
      <Head>
        <title>{postDetails.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`${postDetails.excerpt}`} />
        <meta
          name="keywords"
          content="Frontend development, backend development, software engineering, web development"
        />
        <meta name="author" content="Merdi Kim" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={postDetails} />
        </div>
        <div className="hidden lg:block lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget title="Related Posts" />
          </div>
        </div>
      </div>
      <Author author={postDetails.author} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postDetails = await getPostDetails(params?.slug || '');

  return {
    props: {
      postDetails,
    },
  };
};

export default Post;
