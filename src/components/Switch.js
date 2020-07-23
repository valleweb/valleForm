import React from 'react';

const Switch = ({ label, readOnly = false, onChange, _id = 'input-switch' }) => {

  const switchState = readOnly ? "valleForm__switch--disabled" : "";

  return (
    <span className = {`valleForm__switch ${switchState}`}>

      <label className = "valleForm__switch__label" htmlFor = { _id }> { label } </label>

      <input
        id = { _id }
        className = "valleForm__switch__input"
        type = "checkbox"
        disabled = { readOnly }
        onChange = { onChange }
      />

      <label className = "valleForm__switch__toggle" htmlFor = { _id }></label>

    </span>
  );

}

export default Switch;
