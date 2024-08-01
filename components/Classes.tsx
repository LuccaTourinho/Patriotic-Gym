'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IClassesProps {
}

const classesContainerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: 'linear',
    }
  }
};

const classesVariants = {
  hidden: {y: 20, opacity: 0},
  show:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
};



const classes = [
  {
    name: 'body building',
    img: '/bodybuilding.jpg',
    description: 'Build strength and power with our Body Building classes, designed to help you achieve your fitness goals with a focus on muscle development.',
  },
  {
    name: 'crossfit',
    img: '/crossfit.jpg',
    description: 'Push your limits and build community spirit in our CrossFit sessions, where we embrace the challenge and celebrate progress together.',
  },
  {
    name: 'cardio',
    img: '/cardio.jpg',
    description: 'Boost your heart health and stamina in our Cardio classes, where each session is a step towards a healthier, more vibrant life.',
  },
  {
    name: 'boxing',
    img: '/boxing.jpg',
    description: 'Channel your inner champion with our Boxing classes, offering a powerful mix of fitness and discipline, perfect for anyone looking to get fit.',
  }
]

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
  return (
    <section id='classes'>
      <motion.div 
        variants={classesContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false , amount: 0.2}}	
        className='grid grid-cols-1 lg:grid-cols-2'
      >
        {classes.map((classCard, index) => (
          <div className='relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center' key={index}>
            <div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>
            <Image src={classCard.img} alt={classCard.name} fill className='object-cover' />
            <motion.div 
              variants={classesVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false , amount: 0.2}}	
              className='z-30 max-w-[400px] text-center flex flex-col justify-center items-center gap-4'
            >
              <h3 className='text-3xl font-roboto-slab text-[#B31942] uppercase font-extrabold'>{classCard.name}</h3>
              <p className='text-md font-oswald text-[#F2F2F2]'>{classCard.description}</p>
              <Button
                variant={'default'}
                className={`
                    w-32 text-center bg-[#B31942] text-[#F2F2F2] rounded-none
                    relative overflow-hidden 
                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A3161] 
                    before:transition-transform before:duration-500 before:origin-bottom-center
                    hover:before:scale-x-100 before:scale-x-0
                `}
              >
                <Link href={''}>
                  <span className="relative z-10 text-white uppercase">read more</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        ))}
      </motion.div>
  </section>
  );
};

export default Classes;
