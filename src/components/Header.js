import React from 'react';

const Header = ({ highContrast }) => {
  return (
    <header className={highContrast ? 'high-contrast' : ''}>
      <h1>Mi Aplicación de Libros</h1>
    </header>
  );
};

export default Header;
