// 代码生成时间: 2025-08-28 05:34:01
 * @prop {string} username - The username to be logged in
 * @prop {string} password - The password for the username
 * @prop {function} onLogin - Callback function for successful login
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginComponent = ({ onLogin }) => {
  // State for storing the login details
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  // Handle the input change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };
  
  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a login check
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      onLogin(credentials.username);
    } else {
      alert('Invalid Credentials');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// PropTypes or TypeScript types for the component
LoginComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginComponent;
