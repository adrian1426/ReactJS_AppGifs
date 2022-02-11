import { Link } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'Mexico', 'Colombia', 'Naruto'];

const Home = () => {
  return (
    <>
      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
        {
          POPULAR_GIFS.map(popular => (
            <li key={popular}>
              <Link to={`/search/${popular}`}>
                Gifs de {popular}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Home;