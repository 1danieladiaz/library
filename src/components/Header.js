import React from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <h1>Mi Biblioteca</h1>
      <div className="search-container">
       
      </div>
    </header>
  );
};

export default Header;
