import React from 'react';
import moment from 'moment';
import { IPostCardProps } from '../types';
import Link from 'next/link';

function PostCard({ post }: IPostCardProps) {
  return (
    <div className="flex flex-col md:flex-row  bg-white shadow-lg rounded-lg p-4 mb-8">
      <div className="w-full h-44 md:w-[40%] relative overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <h1 className='transition duration-700 text-center px-2 mt-2 md:mt-0 sm:mb-2 md"mb-4 cursor-pointer hover:text-main-color text-xl sm:text-2xl font-semibold'>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-2 w-full">
          <div className="flex items-center justify-center mt-2 md:mt-0 mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              height="30px"
              width="30px"
              alt={post.author.name}
              className="align-middle rounded-[50%]"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-sm">{post.author.name}</p>
          </div>
          <div className="font-medium text-sm text-gray-700 ">
            <span>
              <i>{moment(post.createdAt).format('MMM DD, YYYY')}</i>
            </span>
          </div>
        </div>
        <p className="text-center lg:text-sm text-gray-700 font-normal px-4 xl:px-18 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="text-right">
          <Link href={`post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block text-main-color lg:text-sm xl:text-lg font-medium rounded-lg border-b-2 cursor-pointer hover:font-bold">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
