import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../API/api';
import MealCard from '../components/MealCard';

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
          <MealCard key={meal.idMeal} meal={meal} onClick={() => {}} />
        ))
      }
    </div>
  );
};

export default Meals;
