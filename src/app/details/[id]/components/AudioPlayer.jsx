import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
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
        icon={isPlaying ? faCirclePause : faCirclePlay}
        style={{ fontSize: "2rem", color: "#121640" }}
        onClick={() => toggleAudio()}
      />
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};