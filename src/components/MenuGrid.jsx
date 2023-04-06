import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ data }) => {
  const [drinkDetails, setDrinkDetails] = useState();
  const [drinkId, setDrinkId] = useState();

  const getDrinkDeets = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((apiData) => {
        setDrinkDetails(apiData);
      });
  };

  useEffect(() => {
    getDrinkDeets(drinkId);
  }, []);

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-gray-600 font-bold text-4xl text-center'>
        Top Rated Cocktails
      </h1>
      {/*filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/*filter type */}
        <div>
          <p className='text-gray-700 font-bold'>Filter By Type</p>
          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
              All
            </button>
            <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
              All
            </button>
            <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
              All
            </button>
            <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
              All
            </button>
            <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
              All
            </button>
          </div>
        </div>
      </div>
      {/* menu items */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {data.map((item) => (
          <MenuItem
            key={item.idDrink}
            item={item}
            setDrinkId={setDrinkId}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
