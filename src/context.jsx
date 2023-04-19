import { useState, createContext, useContext } from 'react';

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [query, setQuery] = useState();
  const [drinkDetails, setDrinkDetails] = useState();
  const [drinkId, setDrinkId] = useState();

  return (
    <CocktailContext.Provider
      value={{
        query,
        setQuery,
        drinkDetails,
        setDrinkDetails,
        drinkId,
        setDrinkId,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

const useCocktailContext = () => {
  const context = useContext(CocktailContext);

  if (context === undefined) {
    throw new Error('useCocktailContext must be used within a ThemeProvider');
  }
  return context;
};

export default useCocktailContext;
