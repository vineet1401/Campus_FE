import { forwardRef, useState } from "react";

const TextAreaInput = ({
  labelTitle,
  labelStyle,
  type,
  name,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  readOnly
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
      <textarea
        value={defaultValue}
        name={name}
        readOnly={readOnly || false}
        rows={1}
        className="textarea textarea-bordered w-full border-2 border-gray-400 focus:border-gray-700"
        placeholder={placeholder || ""}
        onChange={(e) => updateInputValue(e.target.name, e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
