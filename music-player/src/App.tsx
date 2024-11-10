import React, { useState, useRef } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio: any = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio: any = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  return (
    <div style={{ padding: "20px" }}>
      <audio
        ref={audioRef}
        src="gadhpurkavali.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <button
        onClick={handlePlayPause}
        style={{ fontSize: "20px", margin: "10px" }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        value={progress}
        onChange={(e: any) => {
          const audio: any = audioRef.current;
          audio.currentTime = (e.target.value / 100) * audio.duration;
          setProgress(e.target.value);
        }}
        style={{ width: "50%", marginTop: "10px" }}
      />
    </div>
  );
}

export default App;
