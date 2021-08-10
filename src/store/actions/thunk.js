import { fetchMeals, fetchMeal } from '../../API/api';
import {
  loadingMeal, errorMeal, successMeal, loadingMeals, errorMeals, successMeals,
} from './index';

const fetchMealsByCategory = (category) => async (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchMeals(category);
  try {
    const data = await response;
    return dispatch(successMeals(data.meals));
  } catch (e) {
    return dispatch(errorMeals('Error while fetching data.'));
  }
};

const fetchMealById = (id) => async (dispatch) => {
  dispatch(loadingMeal());
  const response = fetchMeal(id);
  try {
    const data = await response;
    return dispatch(successMeal(data.meals[0]));
  } catch (e) {
    return dispatch(errorMeal('Error while fetching data.'));
  }
};

export { fetchMealsByCategory, fetchMealById };
