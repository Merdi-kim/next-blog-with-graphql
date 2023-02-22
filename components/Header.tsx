import React, { MouseEvent, useState } from 'react';
import Link from 'next/link';
import { fetchSpecificPosts } from '../helpers';
import { useRecoilState } from 'recoil';
import { allPosts, specificPosts } from '../services/store';
import { useRouter } from 'next/router';

function Header() {
  const [posts] = useRecoilState(allPosts);
  const [, setPostsToDisplay] = useRecoilState(specificPosts);
  const [activeLink, setActiveLink] = useState({
    all: true,
    frontend: false,
    backend: false,
    cloud: false,
    blockchain: false,
  });

  const activateLink = (e: MouseEvent<HTMLElement>) => {
    //@ts-ignore
    const { dataset } = e.target;
    if (dataset.category === 'frontend') {
      setActiveLink({
        all: false,
        frontend: true,
        backend: false,
        cloud: false,
        blockchain: false,
      });
    }
    if (dataset.category === 'backend') {
      setActiveLink({
        all: false,
        frontend: false,
        backend: true,
        cloud: false,
        blockchain: false,
      });
    }
    if (dataset.category === 'cloud') {
      setActiveLink({
        all: false,
        frontend: false,
        backend: false,
        cloud: true,
        blockchain: false,
      });
    }
    if (dataset.category === 'blockchain') {
      setActiveLink({
        all: false,
        frontend: false,
        backend: false,
        cloud: false,
        blockchain: true,
      });
    }
    if (dataset.category === '') {
      setActiveLink({
        all: true,
        frontend: false,
        backend: false,
        cloud: false,
        blockchain: false,
      });
    }
  };

  const fetchPostsByCategory = (e: MouseEvent<HTMLElement>) => {
    //@ts-ignore
    const { dataset } = e.target;
    activateLink(e);
    const result = fetchSpecificPosts(posts, dataset.category);
    setPostsToDisplay(result);
  };

  const path = useRouter().pathname;

  return (
    <div className="w-full pt-4 px-6 sm:px-16 bg-fadingWhite">
      <div
        className={`${
          path === '/' ? 'flex flex-col sm:flex-row sm:justify-between' : 'flex sm:flex-row justify-center'
        } items-center border-b w-full border-secondary-color pb-2`}
      >
        <div className="mb-4">
          <Link href={'/'}>
            <img src="/name.png" alt="Merdi Kim" className="h-14 w-full sm:h-16 lg:h-24" />
          </Link>
        </div>
        {path === '/' && (
          <div className="w-full sm:w-auto">
            <ul className="h-full overflow-scroll flex my-4 sm:my-0 sm:block ">
              <li
                onClick={fetchPostsByCategory}
                data-category=""
                className={`link_header ${activeLink.all && 'active'}`}
              >
                All
              </li>
              <li
                onClick={fetchPostsByCategory}
                data-category="frontend"
                className={`link_header ${activeLink.frontend && 'active'}`}
              >
                Frontend
              </li>
              <li
                onClick={fetchPostsByCategory}
                data-category="backend"
                className={`link_header ${activeLink.backend && 'active'}`}
              >
                Backend
              </li>
              <li
                onClick={fetchPostsByCategory}
                data-category="cloud"
                className={`link_header ${activeLink.cloud && 'active'}`}
              >
                Cloud
              </li>
              <li
                onClick={fetchPostsByCategory}
                data-category="blockchain"
                className={`link_header ${activeLink.blockchain && 'active'}`}
              >
                Blockchain
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
