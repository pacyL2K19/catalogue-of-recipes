import React from 'react';
import PropTypes from 'prop-types';

const MealCard = (props) => {
  const { meal, onClick } = props;
  return (
    <div className="meal-card-container">
      <img className="img-meal" src={meal.strMealThumb} alt="Meal" />
      <div className="w-100">
        <h2>{meal.strMeal}</h2>
        {/** STATIC DATA */}
        <h3>Time to cook: 10min</h3>
        <h3>Cal: 140Kcal</h3>
      </div>
      <button onClick={onClick} type="button" className="text-light">
        <i className="fas fa-eye" />
        See More
      </button>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MealCard;
