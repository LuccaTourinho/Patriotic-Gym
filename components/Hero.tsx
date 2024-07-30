import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section className='h-[80vh] lg:h-[90vh] ' id='home'>
        Hero
    </section>
  );
};

export default Hero;
