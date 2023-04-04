import React from 'react';
import lemon from '../assets/lemon.webp';
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            {' '}
            The <span className='text-gray-900'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            tasting <span className='text-gray-900'>Cocktails</span>
          </h1>
        </div>
        <img
          src={lemon}
          alt='cocktail'
          className='w-full max-h-[500px] object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
