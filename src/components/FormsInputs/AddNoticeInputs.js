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
      <InputText
        labelTitle="Company Name"
        placeholder="Company Name"
        defaultValue={notification?.name}
        updateFormValue={({ value }) => updateFormValue({ name: "name", value })}
      />
      <InputText
        labelTitle="Company Icon URL"
        placeholder="Icon URL"
        defaultValue={notification?.icon}
        updateFormValue={({ value }) => updateFormValue({ name: "icon", value })}
      />
      <TextAreaInput
        labelTitle="Description"
        placeholder="Description"
        containerStyle={"col-span-2"}
        defaultValue={notification?.description}
        updateFormValue={({ value }) => updateFormValue({ name: "description", value })}
      />
      <InputText
        labelTitle="CTC"
        placeholder="CTC"
        defaultValue={notification?.ctc}
        updateFormValue={({ value }) => updateFormValue({ name: "ctc", value })}
      />
      <InputText
        labelTitle="Location"
        placeholder="Location"
        defaultValue={notification?.location}
        updateFormValue={({ value }) => updateFormValue({ name: "location", value })}
      />
    </div>
  );
};

export default AddNoticeInputs;
