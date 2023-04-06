import React from 'react';

const MenuItem = ({ item, setDrinkId }) => {
  const handleId = (id) => {
    setDrinkId(id);
  };

  return (
    <div
      onClick={() => handleId(item.idDrink)}
      className='border shadow-lg rounded-lg hover:scale-105 cursor-pointer'
    >
      <img
        src={item.strDrinkThumb}
        alt={item.strDrink}
        className='w-full h-[200px] object-cover rounded-t-lg '
      />
      <div className='flex justify-center px-2 py-4'>
        <p className='font-bold'>{item.strDrink}</p>
      </div>
    </div>
  );
};

export default MenuItem;
