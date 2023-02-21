import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts } from '../services/graphql';
import { IPost } from '../types';

function PostWidget() {
  const [recentPosts, setRecentPosts] = useState([]);

  const getPosts = async () => {
    const posts = await getRecentPosts();
    setRecentPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-card shadow-lg rounded-lg mt-8 p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-secondary-color pb-4">Featured Posts</h3>
      {recentPosts.map((post: IPost) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 h-16 flex-none">
            <img src={post.featuredImage.url} alt={post.title} className="align-middle h-full w-full rounded-[50%]" />
          </div>
          <div className="flex-grow ml-4">
            <Link href={`/post/${post.title}`} className="text-md font-normal">
              {' '}
              {post.title}
            </Link>
            <p className="text-gray-500 text-xs font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
