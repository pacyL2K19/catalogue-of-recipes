import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../containers/Filter';

const Header = () => (
  <div className="container-fluid d-flex flex-row justify-content-between py-3 px-5 header">
    <Link to="/">
      <img
        alt="Logo"
        src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
        className="logo"
      />
    </Link>
    <Filter />
  </div>
);

export default Header;
