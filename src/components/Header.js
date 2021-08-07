import React, { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container-fluid d-flex flex-row justify-content-between py-3 px-5 header">
      <img
        alt="Logo"
        src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
        className="logo"
      />
      <input className="input-search" value={search} onChange={handleChange} />
    </div>
  );
};

export default Header;
