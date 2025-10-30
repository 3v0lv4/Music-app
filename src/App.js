
import './App.css';
import Header from './components/header';
import Song from './components/song';

function App() {

  return (
    <div className="App">
      <Header appName="musicApp"/>
        <div className='song-container'>
          <Song title="Bohemian Rhapsody" artist="Queen" duration="5:55" />
          <Song title="Yellow" artist="Coldplay" duration="4:33" />
          <Song title="Demons" artist="Imagine Dragons" duration="3:57" />
          <Song title="Numb" artist="Linkin Park" duration="3:06" />
          <Song title="Birds of a Feather" artist="Billie Eilish" duration="3:51" />
          <Song title="Fuerte no soy" artist="Intocable" duration="4:25" />
        </div>
    </div>
  );
}

export default App;