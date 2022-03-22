import { useContext, useCallback, useState } from 'react';
import UserContext from '../../context/UserContext';

export const useUser = () => {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(({ username, password }) => {
    setState(st => ({ ...st, loading: true }));
    setJwt(`mitoken:${username}-${password}`);
    setState(st => ({ ...st, loading: false }));
  }, [setJwt]);

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    loading: state.loading,
    error: state.error
  }
};