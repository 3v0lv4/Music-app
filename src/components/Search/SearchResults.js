import React from "react";
import './SearchResults.css'

const SearchResults = ({ songs, addToLibrary }) => {
  return (
    <section className="search">
      {songs && songs.length > 0 ? (
        songs.map(({ id, title, artist, duration, year }) => (
          <article key={id} className="search-grid">
            <h3 className="search-title">{title}</h3>
            <h4 className="search-artist">{artist}</h4>
            <p className="search-duration">Duracion: {duration}</p>
            <p className="search-year">Año: {year}</p>
            <button className="search-button" onClick={() => addToLibrary({ id, title, artist, duration, year })}>
              Agregar a la biblioteca
            </button>
          </article>
        ))
      ) : (
        <p className="search-none">No hay canciones encontradas.</p>
      )}
    </section>
  );
};

export default SearchResults;
