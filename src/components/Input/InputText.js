import { forwardRef, useState } from "react";

const InputText = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
  name,
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
        value={defaultValue}
        placeholder={placeholder || ""}
        name={name}
        onChange={(e) => updateInputValue(e.target.name, e.target.value)}
        className="input  input-bordered w-full border-2 border-gray-400 focus:border-gray-700"
      />
    </div>
  );
};

export default InputText;
