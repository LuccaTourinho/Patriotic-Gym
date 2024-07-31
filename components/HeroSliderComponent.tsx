'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface IHeroSliderComponentProps {
}

const HeroSliderComponent: React.FunctionComponent<IHeroSliderComponentProps> = (props) => {
  return (
    <div className='h-full flex flex-col pt-48'>
        <h1 className='text-5xl font-roboto-slab text-[#6C2E04] text-center lg:text-left mb-2'>
            End fat tyranny, <br /> 
            be <span className='bg-gradient-to-r from-[#B31942] via-[#F2F2F2] to-[#0A3161] bg-clip-text text-transparent uppercase'>fat free</span>
        </h1>
        <p className='text-sm font-oswald text-[#6C2E04] text-center lg:text-left'>
        At Fat Free, we're not just about shedding pounds, <br className='hidden lg:block'/> 
        it's about breaking free from limits and embracing a life of strength and independence. <br className='hidden lg:block'/> 
        Inspired by the American spirit, our gym is a place where you can rise to your best self. <br className='hidden lg:block'/> 
        Join us on a journey to fitness and freedom
        </p>
        <div className='flex justify-center lg:justify-start'>
            <Button
                variant={'default'}
                className={`
                    mt-8 w-32 text-center bg-[#0A3161] text-[#F2F2F2] rounded-none
                    relative overflow-hidden 
                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#B31942] 
                    before:transition-transform before:duration-500 before:origin-bottom-center
                    hover:before:scale-x-100 before:scale-x-0
                `}
            >
                <Link href={''}>
                    <span className="relative z-10 text-white">Get Started</span>
                </Link>
            </Button>
        </div>
    </div>
  );
};

export default HeroSliderComponent;
