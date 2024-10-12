import React, { useState } from 'react';
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

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} />

      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : showGenres ? (
        <Genre genres={genres} onSelectGenre={handleSelectGenre} />
      ) : (
        <div>
          <BookList genre={selectedGenre} books={filteredBooks} onBack={handleBackToGenres}/>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
