import React, { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "black",
            color: theme === "light" ? "black" : "#fff",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div>
                <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </div>
    );
};

export default Home;
