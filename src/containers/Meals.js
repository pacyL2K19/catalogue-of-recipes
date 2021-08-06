import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../API/api';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals('Seafood')
      .then((data) => {
        console.log('DATA ===>', data);
        setMeals(data.meals);
      })
      .catch((error) => {
        console.log('ERROR ==>', error);
      });
  }, []);
  return (
    <div>
      Meals
      {
        meals.map((meal) => (
          <p className="h2" key={meal.idMeal}>{meal.strMeal}</p>
        ))
      }
    </div>
  );
};

export default Meals;
