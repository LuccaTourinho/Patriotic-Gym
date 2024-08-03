'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'; 
import { motion } from 'framer-motion';

interface ITestimonialProps {
}

const testimonials = [
  [
    {
      image: <Image src='/person1.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'The gym environment is fantastic, and the trainers are very supportive!',
      name: 'Emily Johnson',
    },
    {
      image: <Image src='/person2.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'I love the variety of classes available. There’s something for everyone.',
      name: 'Sophia Williams',
    },
    {
      image: <Image src='/person3.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'The facilities are top-notch, and I’ve made great progress with my fitness goals.',
      name: 'Michael Smith',
    },
  ],
  [
    {
      image: <Image src='/person4.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'Joining this gym was the best decision I ever made for my health.',
      name: 'Olivia Brown',
    },
    {
      image: <Image src='/person5.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'The personal trainers here are knowledgeable and really push you to do your best.',
      name: 'Ava Davis',
    },
    {
      image: <Image src='/person6.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'I’ve seen amazing results and feel stronger than ever.',
      name: 'Isabella Martinez',
    },
  ],
  [
    {
      image: <Image src='/person7.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'The group classes are fun and challenging, and the community is great.',
      name: 'Mia Garcia',
    },
    {
      image: <Image src='/person8.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'Great equipment and a positive atmosphere make working out here a pleasure.',
      name: 'David Wilson',
    },
    {
      image: <Image src='/person9.jpg' width={150} height={100} alt='testimonial' className='rounded-full border-4 border-[#B31942]'/>,
      testimony: 'The gym is always clean and well-maintained. Highly recommend!',
      name: 'Charlotte Moore',
    },
  ],
];

const testimonialVariants = {
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


const Testimonial: React.FunctionComponent<ITestimonialProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  }

  return (
    <section className='h-[100vh] lg:h-[50vh]  flex flex-col items-center justify-center pt-[120px] md:pt-[60px] lg:pt-[200px]' id='testimonial'>
        <motion.h1 
          variants={testimonialVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false , amount: 0.3}}
          className='text-5xl font-roboto-slab text-[#0A3161] text-center lg:text-left mb-2 uppercase'
        >
          our testimonials
        </motion.h1>
        <Carousel className='w-full'>
          <CarouselContent>
            <CarouselItem key={currentIndex}>
              <motion.div 
                variants={testimonialVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false , amount: 0.3}}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              >
                {testimonials[currentIndex].map((testimonial, index) => (
                  <motion.div 
                    variants={testimonialVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false , amount: 0.3}}
                    key={index} 
                    className='flex flex-col gap-2 items-center justify-center'
                  >
                    {testimonial.image}
                    <p className='text-center text-md text-[#0A3161] text-oswald max-w-[300px]'>{testimonial.testimony}</p>
                    <h3 className='text-3xl font-roboto-slab text-[#B31942]'>{testimonial.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <div className='flex items-center justify-center mt-4 gap-4'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#B31942]' : 'bg-[#0A3161]'}`}
              />
            ))}
          </div>
      </Carousel>
    </section>
  );
};

export default Testimonial;
