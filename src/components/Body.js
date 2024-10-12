import React, { useState } from 'react';
import Login from './Login';
import Genre from './Genre';
import BookList from './BookList';

const Body = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(null);
  
    const genres = ['Latinoamérica', 'Terror', 'Ciencia Ficción', 'Biografía'];
    const books = [
      { title: 'Libro uno', author: 'Autor' },
      { title: 'Libro dos', author: 'Autor' },
    ];
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleSelectGenre = (genre) => {
      setSelectedGenre(genre);
    };
  
    return (
      
      <div>
        
        
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : !selectedGenre ? (
          <Genre genres={genres} onSelectGenre={handleSelectGenre} />
        ) : (
          <BookList genre={selectedGenre} books={books} />
        )}
       
      </div>
      
    );
    
  };
  
  
  
  export default Body;