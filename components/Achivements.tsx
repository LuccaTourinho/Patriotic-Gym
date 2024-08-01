'use client';

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmileBeam,
  faSuitcase,
  faClock,
  faTrophy  } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';
import { text } from 'stream/consumers';
import CountUp from 'react-countup';

interface IAchivementsProps {
}

const stats = [
  {
    number: 19,
    icon: <FontAwesomeIcon icon={faSuitcase} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    text: 'training courses',
  },
  {
    number: 879,
    icon: <FontAwesomeIcon icon={faClock} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    text: 'working hours',
  },
  {
    number: 150,
    icon: <FontAwesomeIcon icon={faFaceSmileBeam} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    text: 'happy customers',
  },
  {
    number: 9,
    icon: <FontAwesomeIcon icon={faTrophy} className='text-[#F2F2F2] text-4xl bg-[#0A3161] rounded-full p-2'/>,
    text: 'International awards',
  },
]

const startsContainerVariant = {
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
}

const statsItem = {
  hidden: {y: 20, opacity: 0},
  show:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    }
  }
}

const Achivements: React.FunctionComponent<IAchivementsProps> = (props) => {
  // useRef é usado para criar uma referência a um elemento do DOM.
  // Essa referência será passada para useInView para verificar a visibilidade.
  const ref = useRef(null);

  // useInView usa a referência fornecida para determinar se o elemento está visível na viewport.
  // Retorna true se o elemento estiver visível, caso contrário, retorna false.
  const isInView = useInView(ref);

  return (
    <section>
        <div className='w-full mx-auto'>
          <motion.div 
            variants={startsContainerVariant} 
            initial='hidden' 
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='grid grid-cols-2 md:grid-cols-4 gap-16'
          >
            {
              stats.map((stat, index) => {
                return (
                  <motion.div
                    variants={statsItem} 
                    key={index} className='flex flex-col gap-2 justify-center items-center'
                  >
                    <div ref={ref} className='border-2 rounded-full h-[140px] w-[140px] border-[#0A3161] flex justify-center items-center'>
                      {
                      /* 
                        isInView controla a renderização do componente CountUp. 
                        Isso garante que a animação de contagem comece apenas quando o elemento estiver visível na tela.
                      */
                      }
                      <div className='text-center border-[1px] rounded-full h-[120px] w-[120px] border-[#B31942] flex justify-center items-center'>
                        {
                          isInView && (<CountUp  start={0} end={stat.number} duration={6} className='text-4xl text-[#B31942]'/>)
                        }
                      </div>
                    </div>
                    <div className='text-center'>
                      {stat.icon}
                    </div>
                    <div className='text-center uppercase text-[#B31942] font-bold font-roboto-slab text-2xl'>
                      {stat.text}
                    </div>
                  </motion.div>
                )
              })
            }
          </motion.div>
        </div>
    </section>
  );
};

export default Achivements;
