import React, { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container p-3 header">
      <p className="mb-0">Home</p>
      <input className="input-search" value={search} onChange={handleChange} />
    </div>
  );
};

export default Header;
