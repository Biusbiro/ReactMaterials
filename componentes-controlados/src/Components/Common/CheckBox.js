import React, {Component} from 'react';

const CheckBox = ( props ) => {
  return (
    <div>
      <input 
        type="checkbox" 
        value={props.value} 
        onChange={props.onChange} 
        checked={props.checked} 
        name={props.name} 
      />
      <label>{props.label}</label>
    </div>
  );
}

export {CheckBox};