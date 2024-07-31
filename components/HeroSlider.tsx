'use client';

import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from './ui/carousel'; 
import HeroSliderComponent from './HeroSliderComponent';


interface IHeroSliderProps {
}

const HeroSlider: React.FunctionComponent<IHeroSliderProps> = (props) => {
  return (
    <Carousel className='w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1100px] px-8'>
        <CarouselContent >
            <CarouselItem>
                <HeroSliderComponent/>
            </CarouselItem>
            {/* second item */}
            <CarouselItem>
                <HeroSliderComponent/>
            </CarouselItem>
            {/* third item */}
            <CarouselItem>
                <HeroSliderComponent/>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='ml-28 mt-[280px] sm:mt-0 sm:ml-8'/>
        <CarouselNext className='mr-28 mt-[280px] sm:mt-0 sm:mr-0'/>
    </Carousel>
  );
};

export default HeroSlider;
