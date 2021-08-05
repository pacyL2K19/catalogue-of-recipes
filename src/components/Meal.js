import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import card from '../styles/card.css';
import styles from '../styles/Meal.module.css';

const cx = classNames.bind(card);

const Meal = ({ meal }) => (
  <div className="card">
    <Link to={`/meal/${meal.idMeal}`} className="card-link">
      <img className="card-img" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-body">
        <p className="card-subtitle">
          <span>Serves</span>
          <span className={cx(styles['bold-info'])}>5</span>
          <span className={cx(styles.divider)}>|</span>
          <span>Prep time</span>
          <span className={cx(styles['bold-info'])}>20 mins</span>
        </p>
        <h3 className="card-title">
          {meal.strMeal}
        </h3>
      </div>
    </Link>
  </div>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
