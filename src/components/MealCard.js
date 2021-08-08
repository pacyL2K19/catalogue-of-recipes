import React from 'react';
import PropTypes from 'prop-types';

const MealCard = (props) => {
  const { meal, onClick } = props;
  return (
    <div className="meal-card-container col-3 my-3">
      <img className="img-meal" src={meal.strMealThumb} alt="Meal" />
      <div className="w-100 details-bloc">
        <div className="p-3">
          <h2 className="meal-title">{meal.strMeal}</h2>
          {/** STATIC DATA */}
          <p className="meal-description mb-1">Time to cook: 10min</p>
          <p className="meal-description mb-1">Cal: 140Kcal</p>
        </div>
        <button onClick={onClick} type="button" className="text-light p-2 btn-open-details">
          <i className="fas fa-eye mr-3" />
          See More
        </button>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MealCard;
