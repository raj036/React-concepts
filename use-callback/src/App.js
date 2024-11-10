import React, { useState, useCallback } from 'react';
import TaskTwo from './TaskTwo';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increment Counter</button>
      </div>
      <div>
        <TaskTwo />
      </div>
    </>
  );
};

export default App;
