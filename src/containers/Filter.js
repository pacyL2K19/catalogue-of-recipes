import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealsByCategory } from '../store/actions/thunk';

const Filter = ({ fetchMealsByCategory, categories }) => {
  const history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    fetchMealsByCategory(e.target.value);
    history.push('/');
  };
  return (
    <select className="form-select" id="categories" name="categories" onChange={handleChange}>
      <option value="" hidden>Select category</option>
      {
          categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))
        }
    </select>
  );
};

Filter.propTypes = {
  fetchMealsByCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMealsByCategory: (query) => dispatch(fetchMealsByCategory(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
