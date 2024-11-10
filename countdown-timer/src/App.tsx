import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const internalRef = useRef<number | undefined>(undefined);

  const handleInp = (e: any) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {
      setTime(inputValue * 60);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  };

  const handlePause = () => {
    setIsPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(internalRef.current);
    setIsActive(false);
    setIsPause(false);
    setTime(0);
  };

  const formatTime = (): any => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min} : ${sec}`;
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      internalRef.current = window.setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(internalRef.current);
      setIsActive(false);
      alert("time is up");
    }

    return () => clearInterval(internalRef.current);
  }, [isActive, isPause, time]);

  return (
    <div>
      <h2>Timer</h2>
      <div>
        <input
          type="number"
          placeholder="Enter time in minutes"
          onChange={handleInp}
        />
        <div>{formatTime()}</div>
      </div>
      <div>
        <button onClick={handleStart} disabled={isActive && !isPause}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          {isPause ? "Resume" : "pause"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
