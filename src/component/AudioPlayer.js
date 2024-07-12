// src/components/AudioPlayer.js
import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
