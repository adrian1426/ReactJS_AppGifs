import { useContext, useCallback } from 'react';
import UserContext from '../../context/UserContext';

export const useUser = () => {
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(() => {
    setJwt('motoken');
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login
  }
};