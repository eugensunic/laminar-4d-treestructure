import React from 'react';

function Checkbox(props) {
  const { id, value } = props;
  return (
    <div className="form-check d-inline-block">
      <input
        className="form-check-input"
        type="checkbox"
        id={'gridCheck' + id}
      />
      <label className="form-check-label" htmlFor={'gridCheck' + id}>
        {value}
      </label>
    </div>
  );
}

export default Checkbox;
