import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author } from '../../components';
import { IPostDetailProps } from '../../types';

function Post({ postDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-auto px-6 sm:px-16 md:px-32 lg:px-16 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={postDetails} />
          <Author author={postDetails.author} />
        </div>
        <div className="hidden lg:block lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postDetails = await getPostDetails(params?.slug || '');

  return {
    props: {
      postDetails,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default Post;
