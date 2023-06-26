import moment from 'moment';
import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { IPostDetailProps } from '../interfaces';
import Image from 'next/image';
import CodeDisplayer from './CodeDisplayer';

function PostDetails({ post }: IPostDetailProps | any) {
  const renderers = {
    a: ({ children }) => <a className="text-white">{children}</a>,
    h1: ({ children }) => <h1 className="text-3xl font-semibold mb-40">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-40">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-40">{children}</h3>,
    h4: ({ children }) => <h4 className="text-base font-semibold mb-40">{children}</h4>,
    h5: ({ children }) => <h5 className="text-sm font-semibold mb-40">{children}</h5>,
    p: ({ children }) => <p className="my-6 text-md">{children}</p>,
    italic: ({ children }) => <i>{children}</i>,
    bold: ({ children }) => <strong>{children}</strong>,
    code: ({ children }) => <div className="p-2 rounded-lg bg-gray-500">{children}</div>,
    code_block: ({ children }) => <CodeDisplayer>{children}</CodeDisplayer>,
    ol: ({ children }) => <ol>{children}</ol>,
    ul: ({ children }) => <ul className="font-bold mb-4">{children}</ul>,
    li: ({ children }) => <li>{children}</li>,
  };

  return (
    <div className="bg-fadingWhite bg-gray-400 bg-opacity-20 break-words shadow-lg rounded-lg lg:p-8 pb-12 mt-8 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={400}
          height={400}
          className="object-top h-56 md:h-[50vh] w-full overflow-hidden object-cover rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <a
            href="https://www.merdikim.com/"
            target={'_blank'}
            className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8"
          >
            <Image
              src={'/profile.JPG'}
              alt={post.author.name}
              width={30}
              height={30}
              className="align-middle h-7 w-7 object-cover rounded-[50%] "
            />
            <p className="inline align-middle text-gray-400 ml-2 text-lg">{post.author.name}</p>
          </a>
          <div className="font-medium text-gray-400 ">
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <RichText content={post.content.raw} renderers={renderers} />;
      </div>
    </div>
  );
}

export default PostDetails;
