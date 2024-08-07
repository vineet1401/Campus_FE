import { useState } from "react";

function DateInput({ labelTitle, labelStyle, containerStyle, defaultValue, placeholder, updateFormValue, updateType }) {
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = (val) => {
        setValue(val);
        updateFormValue({ updateType, value: val });
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input
                type="date"
                value={value}
                className="input input-bordered w-full"
                placeholder={placeholder || ""}
                onChange={(e) => updateInputValue(e.target.value)}
            />
        </div>
    );
}

export default DateInput;
