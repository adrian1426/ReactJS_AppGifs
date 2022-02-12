
import { Route, Link } from 'wouter';
import Home from './pages/home/Home';
import GifSearch from './pages/gif/GifSearch';
import GifDetail from './pages/gif/GifDetail';
import { gifDetailR, gifSearchR, homeR } from './constants/appRouterConstants';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <Link to={homeR}>Logo home</Link>

        <Route
          component={Home}
          path={homeR}
        />
        <Route
          component={GifSearch}
          path={gifSearchR}
        />
        <Route
          component={GifDetail}
          path={gifDetailR}
        />
      </section>
    </div>
  );
}

export default App;
