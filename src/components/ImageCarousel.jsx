import React from 'react';
import Card from './Card';
import headlineCards from '../headlineData';

const ImageCarousel = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {headlineCards.map((headline) => (
        <Card
          headline={headline}
          key={headline.id}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
