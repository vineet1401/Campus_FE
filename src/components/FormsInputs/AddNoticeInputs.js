import React from "react";
import InputText from "../Input/InputText";
import SelectBox from "../Input/SelectBox";
import TextAreaInput from "../Input/TextAreaInput";

const NOTIFICATION_TYPES = [
  { name: "Company Drive", value: "drive" },
  { name: "New Company Arrival", value: "arrival" },
];

const AddNoticeInputs = ({ updateFormValue }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputText
        labelTitle="Notification Title"
        placeholder="Notification Title"
        defaultValue=""
        updateFormValue={updateFormValue}
      />
      <InputText
        type="date"
        labelTitle="Date"
        defaultValue=""
        updateFormValue={updateFormValue}
      />
      <SelectBox
        labelTitle="Notification Type"
        placeholder="Notification Type"
        defaultValue="Select Type"
        options={NOTIFICATION_TYPES}
        updateFormValue={updateFormValue}
      />
      <TextAreaInput
        labelTitle="Description"
        placeholder="Description"
        containerStyle={"col-span-2"}
        defaultValue=""
        updateFormValue={updateFormValue}
      />
    </div>
  );
};

export default AddNoticeInputs;
