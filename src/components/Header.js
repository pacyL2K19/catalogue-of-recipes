import React, { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container-fluid d-flex flex-row justify-content-between py-3 px-5 header">
      <p className="mb-0">Home</p>
      <input className="input-search" value={search} onChange={handleChange} />
    </div>
  );
};

export default Header;
