
import { lazy, Suspense } from 'react';
import { Route, Link } from 'wouter';
import GifSearch from './pages/gif/GifSearch';
import GifDetail from './pages/gif/GifDetail';
import Error from 'pages/error/Error';
import Header from 'components/header/Header';
import Login from 'pages/login/Login';
import { gifDetailR, gifSearchR, homeR, login, registerBR } from './constants/appRouterConstants';
import { ContextProviderGif } from './context/GifContext';
import { ContextProviderUser } from './context/UserContext';
import './App.css';
import Register from 'pages/register/Register';

const Home = lazy(() => import('./pages/home/Home'));

function App() {

  return (
    <ContextProviderUser>
      <div className="App">
        <section className='App-content'>
          <Header />
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
              <Route
                path={login}
                component={Login}
              />
              <Route
                path={registerBR}
                component={Register}
              />
              <Route
                path={'/404'}
                component={Error}
              />
            </Suspense>
          </ContextProviderGif>
        </section>
      </div>
    </ContextProviderUser>
  );
}

export default App;
