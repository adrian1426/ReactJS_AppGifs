import React from 'react';

const Context = React.createContext({
  name: 'Adrian -Si lo usan sin el wrapper provider',
  isSubscribe: true
});

export default Context;