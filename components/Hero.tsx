'use client';

import React from 'react';
import HeroSlider from './HeroSlider';
import { motion } from 'framer-motion';

interface IHeroProps {
}
const heroSliderVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section className='h-[80vh] lg:h-[90vh] hero-section mt-[120px] bg-white' id='home'>
      <div className='max-w-[1440px] px-8 flex justify-between mx-auto '>
        <motion.div
          variants={heroSliderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false , amount: 0.3}}
        >
          <HeroSlider/>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
