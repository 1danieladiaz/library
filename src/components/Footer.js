import React from 'react';

const Footer = ({ highContrast }) => {
  return (
    <footer className={highContrast ? 'high-contrast' : ''}>
      <p>© 2024 Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
