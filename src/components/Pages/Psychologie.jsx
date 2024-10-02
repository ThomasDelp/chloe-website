import React, { useState } from 'react';

import Mainview from '../Mainviews/Mainview';
import PsychologieForAdults from '../Contents/PsychologieForAdults';
import PsychologieForChildren from '../Contents/PsychologieForChildren';
import SwitchButtonPsychologyType from '../Buttons/SwitchButtonPsychologyType';

function Psychologie() {

  const [forChildren, setForChildren] = useState(false)

  const handleSwitchTypeCLick = () => {
    setForChildren(!forChildren)
  }

  return (
    <Mainview>
      <section>
        <SwitchButtonPsychologyType onClick={() => handleSwitchTypeCLick()} value={forChildren} />
        {
          forChildren ?
          <PsychologieForChildren/>
          :
          <PsychologieForAdults/>
        }

      </section>
    </Mainview>

  );
}

export default Psychologie;