import React, { useState } from 'react';
import books from './Books'; // Lista de libros
import './BookList.css'; // Estilos CSS

const BookList = ({ genre }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-list-container">
      <h2>Libros de {genre}</h2>
      
      {/* Search Bar */}
      <input 
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Busque un libro por título o autor"
        className="search-bar"
        aria-label="Search books"
      />

      {/* Book List */}
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p className="book-author">Autor: {book.author}</p>
              <p className="book-synopsis">{book.synopsis}</p>
              <p className="book-categoria">{book.categoria}</p>
              <p className={`availability ${book.available ? 'available' : 'unavailable'}`}>
                {book.available ? 'Disponible' : 'No disponible'}
              </p>
              <button 
                className="borrow-button" 
                disabled={!book.available}
              >
                {book.available ? 'Prestar' : 'No disponible'}
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
