import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import useCocktailContext from '../context';
import SearchBar from './SearchBar';

const MenuGrid = ({ data, setQuery, query, search }) => {
  const { drinkDetails, setDrinkDetails, drinkId, setDrinkId } =
    useCocktailContext;

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-gray-600 font-bold text-4xl text-center'>
        Top Rated Cocktails
      </h1>
      {/* search*/}
      <div className='bg-gray-200 rounded-full flex justify-between items-center px-2 w-[200px] sm:w-[200px] lg:w-[500px]'>
        <input
          type='search'
          name='search-form'
          id='search-form'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search drinks'
          className='bg-transparent  p-2 w-full focus:outline-none '
        />
      </div>
      {/* menu items */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {search(data).map((item) => (
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
