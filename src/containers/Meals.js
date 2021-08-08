import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../API/api';
import MealCard from '../components/MealCard';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals('chicken')
      .then((data) => {
        console.log('DATA ===>', data);
        setMeals(data.meals);
      })
      .catch((error) => {
        console.log('ERROR ==>', error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {
          meals?.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} onClick={() => {}} />
          ))
        }
      </div>
    </div>
  );
};

export default Meals;
