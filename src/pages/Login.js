import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [apiKey, setApiKey] = useState('');
    
    const navigate = useNavigate();
  
    useEffect(() => {
      const apiKey = localStorage.getItem('api_key');
      if (apiKey) {
          navigate('/home');
      }
  }, []);

    const handleInputChange = (event) => {
        if (event.target.name === 'username') setUsername(event.target.value);
        if (event.target.name === 'password') setPassword(event.target.value);
        if (event.target.name === 'apiKey') setApiKey(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Send the data to the server
        const response = await fetch('http://localhost:8000/api/set_api_key', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, apiKey }),
        });

        if (response.ok) {
            // If the server returned a successful response, redirect the user to the main page
            localStorage.setItem('api_key', apiKey);
            navigate('/home');
        } else {
            // Handle error
            // Here, you might want to set some state to show an error message to the user
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleInputChange} placeholder="Username" />
                <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                <input type="text" name="apiKey" value={apiKey} onChange={handleInputChange} placeholder="API Key" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
