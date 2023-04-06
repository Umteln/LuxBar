import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import MenuGrid from './components/MenuGrid';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.drinks);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <ImageCarousel />
      <MenuGrid data={data} />
    </div>
  );
}

export default App;
