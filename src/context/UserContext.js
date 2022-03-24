import React, { useState } from 'react';

const Context = React.createContext({});

export const ContextProviderUser = ({ children }) => {
  const jwtStorage = () => window.sessionStorage.getItem('jwt');
  const [jwt, setJwt] = useState(jwtStorage);

  return (
    <Context.Provider value={{ jwt, setJwt }}>
      {children}
    </Context.Provider>
  )
};

export default Context;