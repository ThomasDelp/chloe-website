import React from 'react';

import "./SwitchButton.scss"

function SwitchButton({children,onClick, className}) {


  return (
    <button onClick={onClick} className={className}>
        {children}
    </button>
  );
}

export default SwitchButton;