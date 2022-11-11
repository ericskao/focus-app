import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const Sound = ({
  audio,
  name,
  icon
}: {
  audio: string;
  name: string;
  icon?: string;
}) => {
  const [volume, setVolume] = useState<number>(0);
  const [play, { stop, sound }] = useSound(audio, { volume: volume / 100 });

  console.log('volume', volume, volume / 100);

  useEffect(() => {
    console.log('here', volume, sound?.playing());
    if (volume === 0 && sound?.playing) {
      stop();
    } else if (volume > 0 && !sound.playing()) {
      console.log('this should be true');
      play();
    }
  }, [volume]);

  return (
    <div>
      {icon && <img className="w-10 h-10" src={icon} />}
      <div>{name}</div>
      <input
        onChange={(e) => {
          setVolume(+e.target.value);
        }}
        id="default-range"
        type="range"
        value={volume}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Sound;
