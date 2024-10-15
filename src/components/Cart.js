import React from 'react';
import './BookList.css';  // Asegúrate de reutilizar los estilos de BookList.css

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="book-list-container">
      <h2>Carrito de Préstamos</h2>
      {cart.length === 0 ? (
        <p>No has prestado ningún libro todavía.</p>
      ) : (
        <div className="book-grid">
          {cart.map((book) => (
            <div key={book.id} className="book-card">  {/* Reutilizamos la clase "book-card" */}
              {book.image && (
                <img src={book.image} alt={book.title} className="book-image" />
              )}
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Autor: {book.author}</p>
              <p className="book-synopsis">{book.synopsis}</p>
              <button 
                className="borrow-button" 
                onClick={() => removeFromCart(book.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
