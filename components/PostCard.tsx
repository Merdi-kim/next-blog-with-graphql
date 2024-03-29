import React from 'react';
import moment from 'moment';
import { IPostCardProps } from '../interfaces';
import Link from 'next/link';
import Image from 'next/image';

function PostCard({ post }: IPostCardProps) {
  return (
    <Link href={`post/${post.slug}`}>
      <div className={`flex flex-col md:flex-row shadow-2xl border-b-2 border-b-gray-800 rounded-lg sm:p-4 mb-8`}>
        <div className="hidden md:block w-full h-44 md:w-[40%] relative overflow-hidden shadow-md">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={400}
            height={400}
            className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h1 className='transition duration-700 text-center sm:px-2 mt-2 md:mt-0 sm:mb-2 md"mb-4 cursor-pointer hover:text-main-color text-xl sm:text-2xl font-semibold'>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-2 w-full">
            <div className="flex items-center justify-center mt-2 md:mt-0 mb-0 w-full lg:w-auto mr-8">
              <Image
                src={'/profile.JPG'}
                alt={post.author.name}
                width={30}
                height={30}
                className="align-middle h-8 w-8 rounded-[50%] object-cover"
              />
              <p className="inline align-middle text-gray-600 ml-2 text-sm">{post.author.name}</p>
            </div>
            <div className="font-medium text-sm text-gray-700 ">
              <span>
                <i>{moment(post.createdAt).format('MMM DD, YYYY')}</i>
              </span>
            </div>
          </div>
          <p className="text-center lg:text-sm text-gray-300 font-normal sm:px-4 xl:px-18 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="text-right"></div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
