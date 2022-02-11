
import { Route, Link } from 'wouter';
import Home from './pages/home/Home';
import GifSearch from './pages/gif/GifSearch';
import GifDetail from './pages/gif/GifDetail';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/'>Logo home</Link>

        <Route
          component={Home}
          path='/'
        />
        <Route
          component={GifSearch}
          path="/search/:keyword"
        />
        <Route
          component={GifDetail}
          path='/gif/:id'
        />
      </section>
    </div>
  );
}

export default App;
