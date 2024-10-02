import React from 'react';

import "./Mainview.scss"

function Mainview({children}) {

  return (
    <div className='mainview'>
      {children}
    </div>
  );
}

export default Mainview;