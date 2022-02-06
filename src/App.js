import { useState } from 'react';
import GifList from './components/GifList';
import './App.css';

function App() {
  const [keyWord, setKeyWord] = useState('panda');

  return (
    <div className="App">
      <section className='App-content'>
        <GifList keyWord={keyWord} />
      </section>
    </div>
  );
}

export default App;
