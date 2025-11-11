import React from 'react';

const Song = ({title, artist, duration, year}) => {

    return (
      <>
        <div className="song">
          <h2>{title}</h2>
          <p>Artista: {artist}</p>
          <p>Duracion: {duration}</p>
          <p>Año: {year}</p>
        </div>
      </>
    );
}

export default Song;
