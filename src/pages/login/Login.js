import { useState } from 'react';
import { useLocation } from 'wouter';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useLocation()[1];

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='username'
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='password'
      />
      <button>Login</button>
    </form>
  );
};

export default Login;