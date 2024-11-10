// App.js
import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import Home from './Home';

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
