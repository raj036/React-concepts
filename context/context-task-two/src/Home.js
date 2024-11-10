// Home.js
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Login from './Login';

const Home = () => {
    const { user, logout, isAuthenticated } = useContext(AuthContext);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {isAuthenticated ? (
                <div>
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Log Out</button>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Home;
