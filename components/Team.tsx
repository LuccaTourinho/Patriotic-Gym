'use client';

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ITeamProps {
}

const trainerData = [
  {
    image: <Image src='/bodybuilder.jpg' alt='trainer' fill className='object-cover' />,
    name: 'George Smith',
    role: 'Body Builder Coach',
    description: 'Expert in bodybuilding with 10 years of experience.',
    social: [
      {
        icon: (
          <Link href='https://www.facebook.com'>
            <Image src='/facebook.svg' alt='facebook' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.instagram.com'>
            <Image src='/instagram.svg' alt='instagram' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.youtube.com'>
            <Image src='/youtube.svg' alt='youtube' width={30} height={20} />
          </Link>
        )
      },
    ]
  },
  {
    image: <Image src='/crossfitter.jpg' alt='trainer' fill className='object-cover' />,
    name: 'Sarah Johnson',
    role: 'Cross Fit Coach',
    description: 'Specialist in cross fit training with 8 years of experience.',
    social: [
      {
        icon: (
          <Link href='https://www.facebook.com'>
            <Image src='/facebook.svg' alt='facebook' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.instagram.com'>
            <Image src='/instagram.svg' alt='instagram' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.youtube.com'>
            <Image src='/youtube.svg' alt='youtube' width={30} height={20} />
          </Link>
        )
      },
    ]
  },
  {
    image: <Image src='/boxer.jpg' alt='trainer' fill className='object-cover' />,
    name: 'Michael Brown',
    role: 'Boxer',
    description: 'Professional boxer with numerous championship titles.',
    social: [
      {
        icon: (
          <Link href='https://www.facebook.com'>
            <Image src='/facebook.svg' alt='facebook' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.instagram.com'>
            <Image src='/instagram.svg' alt='instagram' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.youtube.com'>
            <Image src='/youtube.svg' alt='youtube' width={30} height={20} />
          </Link>
        )
      },
    ]
  },
  {
    image: <Image src='/dancer.jpg' alt='trainer' fill className='object-cover' />,
    name: 'Emily Davis',
    role: 'Dancer',
    description: 'Cardio dance instructor with a passion for fitness and fun.',
    social: [
      {
        icon: (
          <Link href='https://www.facebook.com'>
            <Image src='/facebook.svg' alt='facebook' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.instagram.com'>
            <Image src='/instagram.svg' alt='instagram' width={30} height={20} />
          </Link>
        )
      },
      {
        icon: (
          <Link href='https://www.youtube.com'>
            <Image src='/youtube.svg' alt='youtube' width={30} height={20} />
          </Link>
        )
      },
    ]
  }
];

const teamContainerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.8,
      ease: 'linear',
    }
  }
};

const teamVariant = {
  hidden: {y: 20, opacity: 0},
  show:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
}

const Team: React.FunctionComponent<ITeamProps> = (props) => {
  return (
    <section className='py-12 xl:h-[110vh]' id='team'>
      <motion.div 
        variants={teamContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false , amount: 0.2}}	 
        className='max-w-[1440px] h-full px-8 flex flex-col justify-center items-center mx-auto py-16 xl:pt-0'
      >
        <motion.h2 
          variants={teamVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false , amount: 0.2}}	
          className='text-5xl font-roboto-slab text-[#0A3161] mb-6 text-center uppercase'
        >
          Ours trainers
        </motion.h2>
        <motion.div 
          variants={teamVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false , amount: 0.2}}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12'
        >
          {
            trainerData.map((trainer, index) => {
              return (
                <div key={index}>
                  <div className='relative w-[320px] h-[360px] mx-auto mb-4'>
                    {trainer.image}
                  </div>
                  <div className='flex flex-col text-center justify-center items-center'>
                    <h3 className='text-3xl font-roboto-slab bg-gradient-to-r from-[#B31942] via-[#F2F2F2] to-[#0A3161] bg-clip-text text-transparent mb-2'>{trainer.name}</h3>
                    <p className='text-md font-oswald text-[#B31942]'>{trainer.role}</p>
                    <p className='text-md font-oswald text-[#0A3161] max-w-[200px]'>{trainer.description}</p>
                    <div className='flex gap-4 mt-4'>
                      {trainer.social.map((social, index) => {
                        return (
                          <div key={index}>
                            {social.icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </motion.div>
        <motion.div
        variants={teamVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false , amount: 0.2}}
        >
          <Button
                  variant={'default'}
                  className={`
                      mt-8 w-40 text-center bg-[#B31942] text-[#F2F2F2] rounded-none
                      relative overflow-hidden 
                      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A3161] 
                      before:transition-transform before:duration-500 before:origin-bottom-center
                      hover:before:scale-x-100 before:scale-x-0
                  `}
              >
                  <Link href={''}>
                      <span className="relative z-10 text-white uppercase">see all trainers</span>
                  </Link>
              </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;
