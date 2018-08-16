import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
  <div className="CounterControl" onClick={props.onClick}>
    {props.label}
  </div>
);

export default counterControl;