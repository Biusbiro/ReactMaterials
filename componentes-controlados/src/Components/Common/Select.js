import React from 'react';

const Select = (props) => {
  const optionChoices = props.options.map(option => (
      <option key={option.id} value={option.value}>
        {option.label}
      </option>
  ));
  return (
    <select
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {optionChoices}
    </select>
  );
}

export {Select};