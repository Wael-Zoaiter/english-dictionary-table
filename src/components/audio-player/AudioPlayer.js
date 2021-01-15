import React, { memo, useState } from "react";

import { SoundIcon } from "../../styles";

import { AudioPlayerWrapper } from "./audio-player.style";


export const AudioPlayer = memo(
  ({ audioList = [] }) => {
    const [playing, setPlaying] = useState(false);
  
    const playAudio = () => {
      setPlaying(true);
      let index = 0;
      const audio = new Audio(audioList[index]);
      
      function playNext() {
        if (index < audioList.length - 1) {
          // change src depending on index (local files like 1.mp3, 2.mp3 so on)
          index += 1;
          audio.src = audioList[index];
          audio.load();
          audio.play();
        } else {
          setPlaying(false);
          audio.removeEventListener("ended", playNext, false);
        }
      }

      audio.addEventListener("ended", playNext);
      audio.play();
    };

    return (
      <AudioPlayerWrapper onClick={() => playing ? null : playAudio(true)}>
        <SoundIcon width={35} height={35} />
        <h3>{playing ? 'Playing' : 'Play All'}</h3>
      </AudioPlayerWrapper>
    );
  },
  (prevProp, nextProp) => prevProp.audioList === nextProp.audioList
);
