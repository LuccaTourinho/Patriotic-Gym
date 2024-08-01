'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faTags,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
  import { motion} from 'framer-motion';
import Achivements from './Achivements';

interface IAboutProps {
}

const featured = [
  {
    icon: <FontAwesomeIcon icon={faUsers} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    title: 'Best Trainers in the Industry',
    subtitle: 'Our team consists of certified professionals committed to your success.',
  },
  {
    icon: <FontAwesomeIcon icon={faTags} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    title: 'Excellent Prices',
    subtitle: 'We offer competitive pricing for all our membership plans and services.',
  },
  {
    icon: <FontAwesomeIcon icon={faDumbbell} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    title: 'Modern Equipment',
    subtitle: 'Our gym is equipped with the latest fitness technology and machinery.',
  },
];

const aboutVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
      <div className='max-w-[1440px] px-8 flex flex-col mx-auto'>
          <div className='flex flex-col items-center gap-2 mb-8'>
            <motion.h2 
              variants={aboutVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false , amount: 0.2}}	
              className='text-3xl font-roboto-slab text-[#0A3161] text-center'
            >
              About us
            </motion.h2>
            <motion.p 
              variants={aboutVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false , amount: 0.2}}	
              className='text-md font-oswald text-[#0A3161] text-center'
            >
              At Fat Free, we empower you to break free from limits and embrace strength and independence. <br className='hidden lg:block'/> 
              Our expert trainers, state-of-the-art facilities, and supportive community are here to help you reach your fitness goals and discover your best self.
            </motion.p>
          </div>
          <motion.div 
            variants={aboutVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false , amount: 0.2}}	
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'
          >
            {featured.map((feature, index) => {
              return (
                <div key={index} className='flex flex-col items-center justify-center gap-4 p-10 border shadow-2xl'>
                  <div className='text-center'>
                    {feature.icon}
                  </div>
                  <div className='text-center'>
                    <h4 className='text-2xl font-roboto-slab text-[#B31942]'>{feature.title}</h4>
                    <p className='text-md font-oswald text-[#0A3161]'>{feature.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
          <Achivements/>
      </div>
    </section>
  );
};

export default About;
