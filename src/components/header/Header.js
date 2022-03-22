import React from 'react';
import { Link } from 'wouter';
import { useUser } from '../../hooks/userHook/useUser';
import './Login.css';

const Header = () => {
  const { isLogged } = useUser();

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