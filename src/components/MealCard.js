import React from 'react';
import PropTypes from 'prop-types';

const MealCard = (props) => {
  const { meal, onClick } = props;
  return (
    <div>
      <img onClick={onclick} className="img-meal" src={meal.strMealThumb} alt="Meal" />
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MealCard;
