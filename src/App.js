
import { Route, Link } from 'wouter';
import Home from './pages/home/Home';
import GifSearch from './pages/gif/GifSearch';
import GifDetail from './pages/gif/GifDetail';
import { gifDetailR, gifSearchR, homeR } from './constants/appRouterConstants';
import Contexto from './context/StaticContext';
import { ContextProviderGif } from './context/GifContext';
import './App.css';

function App() {

  return (
    <Contexto.Provider value={{ name: 'Adrian' }}>
      <div className="App">
        <section className='App-content'>
          <Link to={homeR}>Logo home</Link>

          <ContextProviderGif>
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
          </ContextProviderGif>
        </section>
      </div>
    </Contexto.Provider>
  );
}

export default App;
