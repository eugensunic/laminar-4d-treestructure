import React from 'react';

function Checkbox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input d-inline-block"
        type="checkbox"
        id={'gridCheck' + props.id}
      />
      <label className="form-check-label" for={'gridCheck' + props.id}>
        {props.value}
      </label>
    </div>
  );
}

export default Checkbox;
