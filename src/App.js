
import { lazy, Suspense } from 'react';
import { Route, Link } from 'wouter';
// import Home from './pages/home/Home';
import GifSearch from './pages/gif/GifSearch';
import GifDetail from './pages/gif/GifDetail';
import { gifDetailR, gifSearchR, homeR } from './constants/appRouterConstants';
import Contexto from './context/StaticContext';
import { ContextProviderGif } from './context/GifContext';
import './App.css';

const Home = lazy(() => import('./pages/home/Home'));

function App() {

  return (
    <Contexto.Provider value={{ name: 'Adrian' }}>
      <div className="App">
        <section className='App-content'>
          <Link to={homeR}>Logo home</Link>

          <ContextProviderGif>
            <Suspense fallback='cargando...'>
              <Route
                path={homeR}
                component={Home}
              />
              <Route
                path={gifSearchR}
                component={GifSearch}
              />
              <Route
                path={gifDetailR}
                component={GifDetail}
              />
            </Suspense>
          </ContextProviderGif>
        </section>
      </div>
    </Contexto.Provider>
  );
}

export default App;
