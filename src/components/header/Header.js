import React from 'react';
import { Link } from 'wouter';
import { useUser } from '../../hooks/userHook/useUser';
import './Login.css';

const Header = () => {
  const { isLogged, logout } = useUser();

  return (
    <header className='gf-header'>
      {
        isLogged ?
          <a href='#!' onClick={logout}>Logout</a> :
          <Link to='/login'>Login</Link>
      }
    </header>
  );
};

export default Header;