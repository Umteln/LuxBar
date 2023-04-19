import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import MenuGrid from './components/MenuGrid';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState('');
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

  const search_parameters = Object.keys(Object.assign({}, ...data));

  const search = (data) => {
    return data.filter((item) =>
      search_parameters.some((strDrink) =>
        item[strDrink].toString().toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <ImageCarousel />

      <MenuGrid
        data={data}
        query={query}
        setQuery={setQuery}
        search={search}
      />
    </div>
  );
}

export default App;
