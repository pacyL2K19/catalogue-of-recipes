import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMeal } from '../API/api';

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchMeal(id)
        .then((data) => {
          setMeal(data.meals[0]);
          console.log('DATA ==>', data.meals[0]);
        })
        .catch((error) => {
          console.log('ERROR ==>', error);
        });
      // dispatch(fetchMealById(id));
    }
  }, []);
  return (
    <div className="container">
      <div className="row pt-5">
        <div
          className="col-5"
          style={{
            backgroundImage: `url(${meal.strMealThumb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '400px',
            borderRadius: '10px',
            boxShadow: '0 0 4px rgb(222, 240, 211)',
          }}
        />
        <div className="col-7 px-4">
          <h1 className="meal-title border-bottom pb-3">
            {meal.strArea}
            {' '}
            {meal.strCategory}
          </h1>
          <div className="meal-details p-3">
            <p className="meal-instruction-header">Instructions</p>
            <p className=".meal-description">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
