import React from "react";
import InputText from "../Input/InputText";
import SelectBox from "../Input/SelectBox";
import TextAreaInput from "../Input/TextAreaInput";

const NOTIFICATION_TYPES = [
  { name: "Company Drive", value: "Company Drive" },
  { name: "New Company Arrival", value: "New Company Arrival" },
];

const AddNoticeInputs = ({ updateFormValue, notifyData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputText
        labelTitle="Notification Title"
        placeholder="Notification Title"
        defaultValue={notifyData.notifyTitle}
        updateFormValue={updateFormValue}
        name="notifyTitle"
      />
      <InputText
        type="date"
        labelTitle="Date"
        name="notifyDate"
        defaultValue={notifyData.notifyDate}
        updateFormValue={updateFormValue}
      />
      <SelectBox
        labelTitle="Notification Type"
        placeholder="Notification Type"
        defaultValue={notifyData.notifyType}
        name="notifyType"
        options={NOTIFICATION_TYPES}
        updateFormValue={updateFormValue}
      />
      <TextAreaInput
        labelTitle="Description"
        placeholder="Description"
        containerStyle={"col-span-2"}
        defaultValue={notifyData.notifyDescription}
        name="notifyDescription"
        updateFormValue={updateFormValue}
      />

    </div>
  );
};

export default AddNoticeInputs;
