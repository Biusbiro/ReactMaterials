import React from 'react';
import {RadioButton} from './RadioButton';

const RadioButtonList = (props) => {
  const radios = props.options.map(option => {
    return (
      <div>
        <RadioButton
          key={option.id}
          name={props.name}
          label={option.label}
          value={option.value}
          checked={props.checkedOption === option.value}
          onChange={props.onchange}
        />
      </div>
    );
  });
  return(
    <div>
      {radios}
    </div>
  );
}

export {RadioButtonList};