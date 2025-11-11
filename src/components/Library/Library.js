import React, { Fragment } from "react";
import './Library.css'

const Library = ({songs}) => {
    if(!songs || songs.length === 0) {
        return <p className="library-empty">No hay canciones en tu biblioteca.</p>;
    }

    return (
        <Fragment className="library-container">
            <h2 className="library-header">Mi Biblioteca</h2>
            <section className="library-grid">
                {songs.map(({id, title, artist, duration, year}) => {
                    return (
                    <article key={id} className="library-song"> 
                        <div className="library-info">
                            <h3 className="library-title"> {title}</h3>
                            <h4 className="library-artist">Artista: {artist}</h4>
                            <p className="library-meta">Duracion: {duration}</p>
                            <p className="library-meta">Año: {year}</p>
                        </div>
                    </article>)
                })}
            </section>
        </Fragment>
    )
};

export default Library;