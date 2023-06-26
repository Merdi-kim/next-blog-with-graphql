import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <div className="w-full pt-4 px-6 sm:px-16 bg-gray-800 bg-opacity-60">
      <div className="flex sm:flex-row justify-between items-center border-b w-full border-gray-600 pb-2">
        <div className="hidden md:block"></div>
        <div className="mb-4">
          <Link href={'/'}>
            <Image src="/name.png" width={400} height={400} alt="Merdi Kim" className="h-8 md:h-12 w-full" />
          </Link>
        </div>
        <div className="w-auto">
          <ul className="h-full flex flex-col justify-between">
            <li className="font-bold text-slate-300 hover:text-blue-400 cursor-pointer text-base md:text-lg">
              About me
            </li>
            <li className="font-bold text-slate-300 hover:text-blue-400 cursor-pointer text-base md:text-lg">Talks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
