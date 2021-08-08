import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMeal } from '../API/api';

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchMeal(id)
        .then((data) => {
          setMeal(data);
          console.log('DATA ==>', data);
        })
        .catch((error) => {
          console.log('ERROR ==>', error);
        });
      // dispatch(fetchMealById(id));
    }
  }, []);
  return (
    <div>
      {
        console.log('DATA ==>', meal)
      }
    </div>
  );
};

export default MealDetails;
