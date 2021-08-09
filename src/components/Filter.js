import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealsByCategory } from '../store/actions/thunk';

const Filter = ({ fetchMealsByCategory }) => {
  const [category, setCategory] = useState('');
  const history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    fetchMealsByCategory(e.target.value);
    history.push('/');
  };
  const [categories] = useState([
    'chicken',
    'pork',
    'vegetarian',
    'pasta',
    'vegan',
  ]);
  return (
    <select className="form-select" id="categories" name="categories" value={category} onChange={handleChange}>
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
};

const mapDispatchToProps = (dispatch) => ({
  fetchMealsByCategory: (query) => dispatch(fetchMealsByCategory(query)),
});

export default connect(null, mapDispatchToProps)(Filter);
