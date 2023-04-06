import React from 'react';

const Card = ({ headline }) => {
  return (
    <div className='rounded-xl relative hover:scale-105'>
      {/*overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Spice up your Summer</p>
        <p className='px-2'> through 5/11</p>
        <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>
          Order Now
        </button>
      </div>
      <img
        src={headline.image}
        alt='/'
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      />
    </div>
  );
};
export default Card;
