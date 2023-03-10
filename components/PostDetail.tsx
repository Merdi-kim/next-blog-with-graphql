import moment from 'moment';
import { CopyBlock, dracula } from 'react-code-blocks';
import React from 'react';
import { IPostDetailProps } from '../interfaces';
import Image from 'next/image';
import CodeDisplayer from './CodeDisplayer';

function PostDetails({ post }: IPostDetailProps | any) {
  const getContentFragment = (index, text, obj, type?) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );

      case 'heading-four':
        return (
          <h4 key={index} className="text-lg font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );

      case 'paragraph':
        return (
          <p key={index} className="mb-2 text-md">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case 'code-block':
        return <CodeDisplayer key={index} code={modifiedText} />;

      case 'image':
        return <Image key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;

      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-fadingWhite text-black break-words shadow-lg rounded-lg lg:p-8 pb-12 mt-8 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={400}
          height={400}
          className="object-top h-[50vh] w-full overflow-hidden object-cover rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              width={30}
              height={30}
              className="align-middle rounded-[50%] border-blue-700 border-2"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700 ">
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}

export default PostDetails;
