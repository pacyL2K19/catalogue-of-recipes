import { combineReducers } from 'redux';
import mealsReducer from './meals';
import mealReducer from './meal';

const rootReducer = combineReducers({
  meals: mealsReducer,
  meal: mealReducer,
});

export default rootReducer;
