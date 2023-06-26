import Image from 'next/image';
import React from 'react';
import { IAuthorProps } from '../interfaces';

function Author({ author }: IAuthorProps) {
  return (
    <a
      href="https://www.about.merdikim.com"
      target={'_blank'}
      className="h-32 w-full flex items-center justify-center mb-12"
    >
      <div className="w-24 h-24 rounded-full bg-main-color">
        <Image
          width={400}
          height={400}
          src={'/profile.JPG'}
          alt="author"
          className="h-full w-full rounded-full object-cover"
        />
        <p className="font-bold mt-4">Merdi Kim</p>
      </div>
    </a>
  );
}

export default Author;
