import React, { useEffect, useState } from 'react';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}?q=chicken&app_id=${process.env.REACT_APP_AUTH}&app_key=${process.env.REACT_APP_KEY}`, {
      method: 'GET',
      headers: {
        'cache-control': 'private',
        connection: 'keep-alive',
        'content-encoding': 'gzip',
        'content-type': 'application/json',
        date: 'Tue, 03 Aug 2021 22:41:35 GMT',
        expires: 'Thu, 01 Jan 1970 00:00:00 GMT',
        server: 'openresty',
        'strict-transport-security': 'max-age=15552001',
        'transfer-encoding': 'chunked',
        vary: 'accept-encoding',
        'x-envoy-upstream-service-time': '160',
        'x-request-id': '9ea9389ac19e27957f9d9c6434578f39',
        'x-served-by': 'ip-10-0-1-108.ec2.internal/10.0.1.108',
      },
      mode: 'cors',
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
