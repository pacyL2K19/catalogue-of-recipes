import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from '../components/MealCard';
import * as actionsType from '../store/actions/actionTypes';
import { changeCategory } from '../store/actions/index';
import { fetchMealsByCategory } from '../store/actions/thunk';

const Meals = ({
  meals: { meals, status, error }, category, changeCategory, fetchMealsByCategory,
}) => {
  useEffect(() => {
    changeCategory(category);
    if (status === actionsType.IDLE_MEALS || category) {
      fetchMealsByCategory(category || 'beef');
    }
  }, [category]);

  if (status === actionsType.LOADING_MEALS) {
    return <div>Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEALS) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

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

Meals.propTypes = {
  meals: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meals: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
  category: PropTypes.string,
  changeCategory: PropTypes.func.isRequired,
  fetchMealsByCategory: PropTypes.func.isRequired,
};

Meals.defaultProps = {
  category: 'chicken',
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
  fetchMealsByCategory: (category) => dispatch(fetchMealsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
