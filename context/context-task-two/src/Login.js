// Login.js
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        const dummyUserData = { id: 1, name: "Raj trivedi", email: "raj@gmail.com" };
        login(dummyUserData);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default Login;
