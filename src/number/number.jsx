import React from 'react';

function Number() {

  const handleChange = () => {

  }

  return (
    <div>
        <label data-testid='inputLabel'>Number</label>
        <input id='number' type='number' value={10} onChange={handleChange} data-testid='inputButton'/>
    </div>
  );
}

export default Number;
