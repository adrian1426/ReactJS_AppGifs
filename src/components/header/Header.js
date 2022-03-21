import React from 'react';
import { Link } from 'wouter';
import './Login.css';

const Header = () => {
  const isLogged = false;

  return (
    <header className='gf-header'>
      {
        isLogged ?
          <Link to='/logout'>Logout</Link> :
          <Link to='/login'>Login</Link>
      }
    </header>
  );
};

export default Header;