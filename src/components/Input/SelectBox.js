import React, { useState, useEffect } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

function SelectBox(props) {
  const {
    labelTitle,
    labelDescription,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    readOnly,
    updateFormValue,
    name
  } = props;

  const [selectedValue, setSelectedValue] = useState(""); // Manage value using state

  const updateInputValue = (name, value) => {
    setSelectedValue(value); // Update local state
    updateFormValue({ name, value }); // Pass updated value to parent
  };

  useEffect(() => {
    // If defaultValue exists, set it as selected
    if (props.defaultValue) {
      setSelectedValue(props.defaultValue);
    }
  }, [props.defaultValue]);

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
        value={selectedValue} // Bind to state
        readOnly={readOnly || false}
        name={name}
        onChange={(e) => updateInputValue(e.target.name, e.target.value)}
      >
        <option value="" disabled>{placeholder}</option> {/* Placeholder */}
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
