import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';
import boopSfx from '../src/assets/audio/sample.mp3';
import boopSfx2 from '../src/assets/audio/sample-12s.mp3';
import Header from './components/Header';

function App() {
  // const [play] = useSound(boopSfx);
  // const [play2] = useSound(boopSfx2);

  return (
    <div className="App">
      <Header />
      <div>stufff</div>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
