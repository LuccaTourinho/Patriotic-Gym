import * as React from 'react';
import HeroSlider from './HeroSlider';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section className='h-[80vh] lg:h-[90vh] hero-section mt-[120px] bg-white' id='home'>
      <div className='max-w-[1440px] px-8 flex justify-between mx-auto '>
        <HeroSlider/>
      </div>
    </section>
  );
};

export default Hero;
