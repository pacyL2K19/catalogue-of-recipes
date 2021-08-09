import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchMealsByCategory } from '../store/actions/thunk';

const Filter = () => {
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

export default Filter;
