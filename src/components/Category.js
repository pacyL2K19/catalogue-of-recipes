import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => (
  <div className="card">
    <Link to={`/meals/${category.strCategory}`} className="card-link">
      <img className="card-img" src={category.strCategoryThumb} alt={category.strCategory} />
      <div className="card-body">
        <h3 className="card-title">
          {category.strCategory}
        </h3>
      </div>
    </Link>
  </div>
);

Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
