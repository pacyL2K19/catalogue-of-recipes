import React, { useEffect } from 'react';
import { fetchMeals } from '../API/api';

const Meals = () => {
  useEffect(() => {
    fetchMeals('Seafood')
      .then((data) => {
        console.log('DATA ===>', data);
      })
      .catch((error) => {
        console.log('ERROR ==>', error);
      });
  }, []);
  return (
    <div>
      Meals
    </div>
  );
};

export default Meals;
