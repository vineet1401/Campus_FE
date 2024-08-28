// import axios from 'axios'
// import capitalize from 'capitalize-the-first-letter'
import React, { useState, useEffect } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

function SelectBox(props) {
  const {
    labelTitle,
    labelDescription,
    defaultValue,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    readOnly,
    updateFormValue,
    name
  } = props;
  
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  const updateInputValue = (name, value) => {
    setValue(value);
    updateFormValue({ name, value });
  };

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <select
        className="select select-bordered w-full border-2 border-gray-400 focus:border-gray-700"
        value={value}
        readOnly={readOnly || false}
        placeholder={placeholder || ""}
        name={name}
        onChange={(e) => updateInputValue(e.target.name, e.target.value)}
      >
        <option aria-readonly value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => (
          <option value={o.value || o.name} key={k}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
