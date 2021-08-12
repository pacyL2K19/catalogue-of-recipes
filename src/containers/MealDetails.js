import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealById } from '../store/actions/thunk';
import * as actionsType from '../store/actions/actionTypes';

const MealDetails = ({ meal: { status, meal, error }, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id !== meal.idMeal) {
      dispatch(fetchMealById(id));
    }
  }, []);

  if (status === actionsType.LOADING_MEAL) {
    return <div>Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEAL) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

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
            <p className="meal-description" data-testid="meal-description">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MealDetails.propTypes = {
  meal: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meal: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps)(MealDetails);
