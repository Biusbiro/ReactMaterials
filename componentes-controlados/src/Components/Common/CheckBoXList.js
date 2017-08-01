import React from 'react';
import {CheckBox} from "./CheckBox";

const CheckBoxList = (props) => {
  const checkboxes = props.option.map(option => {
    return (
      <div>
        <CheckBox
          name = {props.name}
          label = {option.label}
          value = {option.value}
          onChange = {props.onChange}
          checked = {props.checkedOptions}
        />
      </div>
    );
  });
}

export {CheckBoxList};