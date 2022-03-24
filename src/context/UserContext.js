import React, { useState } from 'react';

const Context = React.createContext({});

export const ContextProviderUser = ({ children }) => {
  const jwtStorage = () => window.sessionStorage.getItem('jwt');
  const [jwt, setJwt] = useState(jwtStorage);
  const [favs, setFavs] = useState([]);

  return (
    <Context.Provider
      value={{
        jwt, setJwt, favs, setFavs
      }}
    >
      {children}
    </Context.Provider>
  )
};

export default Context;