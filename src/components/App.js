import React, { useEffect, useState } from 'react';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        // mode: 'cors',
      },
    )
      .then((recipes_) => {
        setRecipes(recipes_);
        console.log('RECIPES ==>', recipes_);
      })
      .catch((err) => {
        console.log('ERROR ==>', err);
      });
  }, []);
  return (
    <div className="App">
      <h2>Catalogue of recipes</h2>
      <p>{console.log(recipes)}</p>
    </div>
  );
};

export default App;
