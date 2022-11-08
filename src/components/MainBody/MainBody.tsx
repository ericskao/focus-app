import { useState } from 'react';
import useSound from 'use-sound';

import birds from '../../assets/audio/birds.mp3';
import crickets from '../../assets/audio/crickets.mp3';
import fire from '../../assets/audio/fire.mp3';
import people from '../../assets/audio/people.mp3';
import rain from '../../assets/audio/rain.mp3';
import sbowl from '../../assets/audio/sbowl.mp3';

const MainBody = () => {
  const [playBirds, { stop: stopBirds }] = useSound(birds);
  const [playCrickets, { stop: stopCrickets }] = useSound(crickets);
  const [playFire, { stop: stopFire }] = useSound(fire);
  const [playPeople, { stop: stopPeople }] = useSound(people);
  const [playRain, { stop: stopRain }] = useSound(rain);

  return (
    <div className="MainBody">
      <div onClick={() => playBirds()}>Birds</div>
      <div onClick={() => playCrickets()}>Crickets</div>
      <div onClick={() => playFire()}>Fire</div>
      <div onClick={() => playPeople()}>People</div>
      <div onClick={() => playRain()}>Rain</div>
      {/* <div onClick={onClickPlay}>Soundbowl</div> */}
    </div>
  );
};
export default MainBody;
