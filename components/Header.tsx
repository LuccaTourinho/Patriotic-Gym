'use client';

import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Image from 'next/image';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scrolls event
    window.addEventListener('scroll', handleScroll);

    // clear scrolls event
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    console.log(headerActive);
  }, []);

  return (
    <header className={`${headerActive ? 'h-[110px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-[#F2F2F2] transition-all z-50`}>
        <div className='max-w-[1440px] px-8 flex justify-between mx-auto '>
          <Link href={''}>
            <Image src='/fatfree7.jpeg' width={110} height={54} alt='logo' className='rounded-full'/>
          </Link>
          <MobileNav containerStyles={`text-[#B31942] flex flex-col text-center gap-8 fixed bg-[#F2F2F2] w-full left-0 ${headerActive ? 'top-[110px]' : 'top-[124px]'} transition-all uppercase pb-2 xl:hidden`}/>
          <div className='hidden xl:flex items-center'>
            <Nav containerStyles='text-[#B31942] flex gap-4 uppercase'/>
          </div>
          <div>
            <button>
              
            </button>
          </div>
        </div>
    </header>
  );
};

export default Header;
