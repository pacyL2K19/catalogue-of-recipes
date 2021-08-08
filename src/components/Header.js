import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [category, setCategory] = useState('');
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const [categories] = useState([
    'chicken',
    'pork',
    'vegetarian',
    'pasta',
    'vegan',
  ]);
  return (
    <div className="container-fluid d-flex flex-row justify-content-between py-3 px-5 header">
      <Link to="/">
        <img
          alt="Logo"
          src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
          className="logo"
        />
      </Link>
      <select className="form-select" id="categories" name="categories" value={category} onChange={handleChange}>
        <option value="" hidden>Select category</option>
        {
            categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>{category}</option>
            ))
          }
      </select>
      {/* <input className="input-search" value={search} onChange={handleChange} /> */}
    </div>
  );
};

export default Header;
