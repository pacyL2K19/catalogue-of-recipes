import React, { useEffect, useState } from 'react';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_HOST, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
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
      <p>
        {recipes}
      </p>
    </div>
  );
};

export default App;
