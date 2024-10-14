import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import books from './components/Books';
import Genre from './components/Genre';
import Login from './components/Login';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showGenres, setShowGenres] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [highContrast, setHighContrast] = useState(false);
  const genres = ['Latinoamérica', 'Terror', 'Ciencia Ficción', 'Biografía'];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSelectGenre = (genre) => {
    setSelectedGenre(genre);
    setShowGenres(false);
  };

  const handleBackToGenres = () => {
    setShowGenres(true);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBooks(filtered);
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  // Aplicar clases según el estado de alto contraste o modo oscuro
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast', 'dark-mode');
    }
  }, [highContrast]);

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} highContrast={highContrast} />

      {/* Botón para activar/desactivar Alto Contraste */}
      <button className={highContrast ? "high-contrast" : ""} onClick={toggleContrast}>
        {highContrast ? 'Desactivar Alto Contraste' : 'Activar Alto Contraste'}
      </button>

      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : showGenres ? (
        <Genre genres={genres} onSelectGenre={handleSelectGenre} />
      ) : (
        <div>
          <BookList genre={selectedGenre} books={filteredBooks} onBack={handleBackToGenres}/>
        </div>
      )}

      <Footer highContrast={highContrast} />
    </div>
  );
};

export default App;
