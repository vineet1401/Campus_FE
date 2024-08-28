import { forwardRef, useState,useEffect } from "react";

const InputText = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  // value,
  defaultValue,
  placeholder,
  updateFormValue,
  name,
  readOnly,
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");

  const updateInputValue = (name, value) => {
    setValue(value);
    updateFormValue({ name, value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || "text"}
        value={value}
        readOnly={readOnly || false}
        placeholder={placeholder || ""}
        name={name}
        onChange={(e) => updateInputValue(e.target.name, e.target.value)}
        className="input input-bordered w-full border-2 border-gray-400 focus:border-gray-700"
      />
    </div>
  );
};

export default InputText;



