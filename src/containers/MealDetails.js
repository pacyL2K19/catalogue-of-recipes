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
      <div className="row">
        <div
          className="col-5"
          style={{
            backgroundImage: `url(${meal.strMealThumb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '200px',
            // width: '120px',
          }}
        >
          Img
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
