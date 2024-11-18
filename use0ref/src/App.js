import React, { useRef } from 'react';
import ScrollToSection from './TaskTwo';

//For avoiding uneccessary re-renders we use useRef

function App() {

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div >
        <input type="text" ref={inputRef} placeholder='Focus' />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
      <ScrollToSection />
    </>
  );
}

export default App;
