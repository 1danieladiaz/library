import React, { useState } from 'react';
import './Login.css';  

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const url = isSignup ? 'http://localhost:3000/signup' : 'http://localhost:3000/login';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.text();

    if (response.status === 200) {
      alert(result);
      if (!isSignup) {
        onLogin();  
      }
    } else {
      setError(result);  
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isSignup ? 'Crear Cuenta' : 'Iniciar Sesión'}</h2>

        {error && <p role="alert" aria-live="assertive">{error}</p>}

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isSignup && (
          <>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}

        <button type="submit" className="login-button">
          {isSignup ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? '¿Ya tienes cuenta? Iniciar Sesión' : '¿No tienes cuenta? Crear una'}
      </button>
    </div>
    
  );
};

export default Login;
