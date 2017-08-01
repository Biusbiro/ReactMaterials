import React from 'react';

const RadioButton = (props) => {

  return (
    <div>
      <input 
        type="radio" 
        name={props.name}
        value={props.value}
        checked={props.checked} 
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </div>
  );
}

export {RadioButton};