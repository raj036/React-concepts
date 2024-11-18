import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const App = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState(null);
  const ref = useRef(null);

  // ComponentDidMount
  useEffect(() => {
    console.log('Component mounted');
    setTimeout(() => setData('Fetched Data'), 1000);

    // ComponentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    if (state !== 0) {
      console.log(`State updated to: ${state}`);
    }
  }, [state]);

  // ComponentWillMount 
  useLayoutEffect(() => {
    console.log('useLayoutEffect: DOM is ready');
    if (ref.current) {
      ref.current.style.color = 'blue';
    }
  }, []);

  return (
    <div>
      <h1 ref={ref}>Lifecycle Methods</h1>
      <p>State: {state}</p>
      <p>Data: {data || 'Loading...'}</p>
      <button onClick={() => setState(state + 1)}>Update State</button>
    </div>
  );
};

export default App;
