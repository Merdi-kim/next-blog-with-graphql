import React, { MouseEvent } from 'react';
import Link from 'next/link';
import { fetchSpecificPosts } from '../helpers';
import { useRecoilState } from 'recoil';
import { allPosts, specificPosts } from '../services/store';

function Header() {
  const [posts] = useRecoilState(allPosts);
  const [, setPostsToDisplay] = useRecoilState(specificPosts);

  const fetchPostsByCategory = (e: MouseEvent<HTMLElement>) => {
    //@ts-ignore
    const { dataset } = e.target;
    const result = fetchSpecificPosts(posts, dataset.category);
    setPostsToDisplay(result);
  };

  return (
    <div className="w-full mt-4 mb-8 px-6 sm:px-16">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center border-b w-full border-secondary-color pb-2">
        <div className="mb-4">
          <Link href={'/'}>
            <img src="/name.png" alt="Merdi Kim" className="h-14 w-full sm:h-16 lg:h-24" />
          </Link>
        </div>
        <div className="w-full sm:w-auto">
          <ul className="h-full overflow-scroll flex my-4 sm:my-0 sm:block ">
            <li onClick={fetchPostsByCategory} data-category="" className="link_header">
              All
            </li>
            <li onClick={fetchPostsByCategory} data-category="frontend" className="link_header">
              Frontend
            </li>
            <li onClick={fetchPostsByCategory} data-category="backend" className="link_header">
              Backend
            </li>
            <li onClick={fetchPostsByCategory} data-category="cloud" className="link_header">
              Cloud
            </li>
            <li onClick={fetchPostsByCategory} data-category="Blockchain" className="link_header">
              Blockchain
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;