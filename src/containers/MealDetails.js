import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (id !== meal.idMeal) {
    //   dispatch(fetchMealById(id));
    // }
  }, []);
  return (
    <div>
      {id}
    </div>
  );
};

export default MealDetails;
