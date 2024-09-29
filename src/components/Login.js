import React, { useState } from 'react';
import'./Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    } else {
      setError('Please enter a valid username and password');
    }
  };

  return (
    <div className="login-container" >
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>REGISTRO</h2>
          {error && <p role="alert" aria-live="assertive">{error}</p>}
          <div className='input-group'>
            <label htmlFor="username">Usuario:</label>
              <input
                id="username" 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                aria-required="true"
              />
          </div>
          <div className='input-group'>
            <label htmlFor="password">Contraseña:</label>
              <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              aria-required="true"
              />
          </div>
        <button type="submit" className='login-button'>Iniciar Seción</button>
      </form>
    </div>
  );
};

export default Login;
