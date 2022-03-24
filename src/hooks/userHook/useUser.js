import { useContext, useCallback, useState } from 'react';
import UserContext from '../../context/UserContext';

export const useUser = () => {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJwt, setFavs, favs } = useContext(UserContext);

  const login = useCallback(({ username, password }) => {
    const token = `mitoken:${username}-${password}`;

    setState(st => ({ ...st, loading: true }));
    setJwt(token);
    window.sessionStorage.setItem('jwt', token);
    setState(st => ({ ...st, loading: false }));
  }, [setJwt]);

  const logout = useCallback(() => {
    setJwt(null);
    window.sessionStorage.removeItem('jwt');
  }, [setJwt]);

  const addFavorito = useCallback(({ id }) => {
    setFavs(f => [...f, id]);
  }, [setFavs]);

  const delFavorito = useCallback(({ id }) => {
    const filter = favs.filter(f => f !== id);
    setFavs(filter)
  }, [favs, setFavs]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    loading: state.loading,
    error: state.error,
    addFavorito,
    delFavorito,
    favs
  }
};