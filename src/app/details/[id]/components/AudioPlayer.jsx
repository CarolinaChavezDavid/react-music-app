import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const AudioPlayer = ({ audioSrc }) => {
  console.log("audio", audioSrc);
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={isPlaying ? faCirclePause : faCirclePlay}
        onClick={() => toggleAudio()}
        style={{ fontSize: "2rem", color: "#121640" }}
      />
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};
