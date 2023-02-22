import Image from 'next/image';
import React from 'react';

function NoPostsPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Image src="/notfound.jpg" width={400} height={400} className="h-[16rem] w-[16rem] mb-6 rounded-full" alt="" />
      <p>No articles in this category</p>
    </div>
  );
}

export default NoPostsPlaceholder;
