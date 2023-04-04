import React, { useCallback, useState, useEffect } from 'react';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import axios from 'axios';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch(
  //     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  //   )
  //     .then((resp) => resp.json())
  //     .then((apiData) => {
  //       setData(apiData.drinks);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(data);

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <ImageCarousel />
    </div>
  );
}

export default App;
