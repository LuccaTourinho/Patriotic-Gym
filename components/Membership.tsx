'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MembershipSlider from './MembershipSlider';


interface IMembershipProps {
}

const pricesContainerVariants = {
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

const pricesVariant = {
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

const Membership: React.FunctionComponent<IMembershipProps> = (props) => {
  return (
    <section className='py-20 bg-membership lg:h-[95vh] relative z-10' id='prices'>
        <motion.div 
          variants={pricesContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false , amount: 0.2}}
          className='flex flex-col justify-center items-center'
        >
          <div className='absolute bg-black opacity-30 w-full h-full top-0 z-10'></div>
          <motion.h2 
            variants={pricesVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false , amount: 0.2}}
            className='text-5xl text-center text-[#B31942] uppercase font-roboto-slab z-20'
          >
            membership
          </motion.h2>
          <motion.div
            variants={pricesVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false , amount: 0.2}}
            className='z-20'
          > 
            <MembershipSlider/>
          </motion.div>
        </motion.div>
    </section>
  );
};

export default Membership;
