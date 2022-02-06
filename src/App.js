import GifList from './components/GifList';
import { Route, Link } from 'wouter';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <h1>App Gifs</h1>

        <Link to="/gif/pandas">pandas</Link>
        <Link to="/gif/mexico">mexico</Link>
        <Link to="/gif/uruguay">uruguay</Link>

        <Route
          component={GifList}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
