import React from 'react';

import "./SwitchButtonPsychologyType.scss"
import SwitchButton from './SwitchButton';

function SwitchButtonPsychologyType({onClick, value=false}) {

  return (
    <SwitchButton onClick={onClick} className={`switch-button-psychology-type${value ? ' switch-button-psychology-select-children-active':' switch-button-psychology-select-adults-active'}`}>
      <div className={`switch-button-psychology-select-children${value ? ' switch-button-psychology-select-active':''}`}>
        <p>Pour les Enfants</p>
      </div>
      <div className={`switch-button-psychology-select-adults${!value ? ' switch-button-psychology-select-active':''}`}>
        <p>Pour les Adultes</p>
      </div>
    </SwitchButton>
  );
}

export default SwitchButtonPsychologyType;