import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useUser } from '../../hooks/userHook/useUser';
import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useLocation()[1];
  const { login, isLogged, loading, error } = useUser();
  const { onLogged } = props;

  const handleSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (isLogged) {
      navigate('/');
      onLogged();
    }
  }, [isLogged, navigate, onLogged]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error login...</h1>;
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <label>
        usuario
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='username'
        />
      </label>

      <label>
        password
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
      </label>
      <button className='btn'>Login</button>
    </form>
  );
};

export default Login;