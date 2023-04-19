import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ query, setQuery, search}) => {
  
  useEffect(()=> {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((resp) => resp.json())
      .then((apiData) => {
        console.log(apiData.drinks);
      });

  },[])




    


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      
    </div>
  );
};

export default SearchBar;
