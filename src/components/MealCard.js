import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = (props) => {
  const { meal, onClick } = props;
  return (
    <div className="meal-card-container col-3 my-3">
      <Link to={`/meal/${meal.idMeal}`}><img className="img-meal" src={meal.strMealThumb} alt="Meal" /></Link>
      <div className="w-100 details-bloc">
        <div className="p-3">
          <h2 className="meal-title">{meal.strMeal}</h2>
          {/** STATIC DATA */}
          <p className="meal-description mb-1">Time to cook: 10min</p>
          <p className="meal-description mb-1">Cal: 140Kcal</p>
        </div>
        <Link to={`/meal/${meal.idMeal}`}>
          <button onClick={onClick} type="button" className="text-light p-2 btn-open-details">
            <i className="fas fa-eye mr-3" />
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MealCard;
