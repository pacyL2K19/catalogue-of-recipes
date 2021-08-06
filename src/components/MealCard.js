import React from 'react';
import PropTypes from 'prop-types';

const MealCard = (props) => {
  const { meal, onClick } = props;
  return (
    <div className="meal-card-container col-4 my-3">
      <img className="img-meal" src={meal.strMealThumb} alt="Meal" />
      <div className="w-100 details-bloc">
        <h2 className="meal-title">{meal.strMeal}</h2>
        {/** STATIC DATA */}
        <h3 className="meal-description">Time to cook: 10min</h3>
        <h3 className="meal-description">Cal: 140Kcal</h3>
        <button onClick={onClick} type="button" className="text-light btn-open-details">
          <i className="fas fa-eye" />
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
