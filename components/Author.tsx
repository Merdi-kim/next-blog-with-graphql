import Link from 'next/link';
import React from 'react';
import { IAuthorProps } from '../interfaces';

function Author({ author }: IAuthorProps) {
  return (
    <Link href={'/'} className="h-32 w-full flex items-center justify-center mb-12">
      <div className="w-24 h-24 rounded-full bg-main-color">
        <img src={author.photo.url} alt="author" className="h-full w-full rounded-full" />
        <p className="font-bold mt-4">Merdi Kim</p>
      </div>
    </Link>
  );
}

export default Author;
