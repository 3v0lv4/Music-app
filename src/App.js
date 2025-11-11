import './App.css';
import Header from './components/Header/Header';
import Song from './components/Song/Song';
import SearchResults from './components/Search/SearchResults';
import { useEffect, useState } from 'react';
import Library from './components/Library/Library';

function App() {

  const [SongList, setSongList] = useState([]);
  const [librarySongs, setLibrarySongs] = useState ([]);
  const [query, setquery] = useState('');

  const handleSearch = () => {
    const allSongs = [
      { id: 1, title: "Die with a smile", artist: "Bruno mars", duration:"3:33", year: 2025 },
      { id: 2, title: "i`d reather pretend", artist: "Bryant barnes", duration:"3:05", year: 2025 },
      { id: 3, title: "In the End", artist: "Linkin Park", duration: "3:23", year: 2005 },
      { id: 4, title: "Viva la Vida", artist: "Coldplay", duration: "3:35", year: 2008 },
      { id: 5, title: "Clocks", artist: "Coldplay", duration: "3:40", year: 2002 },
      { id: 6, title: "Leave the Door Open", artist: "Bruno Mars", duration: "3:52", year: 2021 },
      { id: 7, title: "Wildflower", artist: "Billie Eilish", duration: "3:33", year: 2020 },
      { id: 8, title: "Demons", artist: "Imagine Dragons", duration: "3:57", year: 2012 },
      { id: 9, title: "Yellow", artist: "Coldplay", duration: "4:33", year: 2007 },
    ];

    const results = allSongs.filter (
      (song) => 
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
    );

    setSongList(results)
  };

   const addToLibrary = (song) => {
    setLibrarySongs((prevLibrary) => {
      if (prevLibrary.some((s) => s.id === song.id)) return prevLibrary;
      return [...prevLibrary, song];
    });
  };

  useEffect(() => {
    console.log(`La biblioteca se ha actualizado:`, librarySongs);
  }, [librarySongs]);

  return (
    <div className="App">
      <Header appName="musicApp" />

      <div className="main-content">
        <div className="song-container">
          <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" year="1985" />
          <Song title="Yellow" artist="Coldplay" duration="4:33" year="2007" />
          <Song title="Demons" artist="Imagine Dragons" duration="3:57" year="2012" />
          <Song title="Numb" artist="Linkin Park" duration="3:06" year="2007" />
          <Song title="Birds of a Feather" artist="Billie Eilish" duration="3:51" year="2024" />
          <Song title="Fuerte no soy" artist="Intocable" duration="4:25" year="2005" />
        </div>

        <section className="search-section">
          <h2 className="section-title">Buscar Canciones</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por título o artista..."
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Buscar
          </button>
        </section>

        <h2 className="section-title">Resultados de Búsqueda</h2>
        <SearchResults songs={SongList} addToLibrary={addToLibrary} />

        <Library songs={librarySongs} />
      </div>
    </div>
  );
}

export default App;