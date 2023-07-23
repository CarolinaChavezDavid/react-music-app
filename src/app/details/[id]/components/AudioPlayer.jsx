import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const AudioPlayer = (audioSrc) => {
  console.log("audio", audioSrc);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={isPlaying ? faPause : faPlay}
        onClick={() => toggleAudio()}
      />
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};
