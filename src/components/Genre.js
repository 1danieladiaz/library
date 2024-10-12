import React from 'react';
import './Genre.css';

const Genre = ({ genres, onSelectGenre }) => {
  return (
    <div className="estilo-genero">
      <h2>Selecciona un género</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>
            <button onClick={() => onSelectGenre(genre)}>{genre}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;


//Acá solo traduje el h2
