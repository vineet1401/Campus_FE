import React from "react";
import InputText from "../Input/InputText";
import TextAreaInput from "../Input/TextAreaInput";

const EducationInputs = ({educationData, updateFormValue}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <InputText
        labelTitle="Institution Name"
        defaultValue={educationData?.institutionName}
        name="institutionName"
        placeholder="Institution Name"
        updateFormValue={updateFormValue}
        containerStyle={"col-span-2"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          name="startDate"
          updateFormValue={updateFormValue}
          defaultValue={educationData?.startDate}
          type="date"
          labelTitle="Start Date"
        />
        <InputText
          name="endDate"
          updateFormValue={updateFormValue}
          defaultValue={educationData?.endDate}
          type="date"
          labelTitle="End Date"
        />
      </div>
      <InputText
        labelTitle="Degree Name"
        name="degree"
        defaultValue={educationData?.degree}
        placeholder="Degree Name"
        updateFormValue={updateFormValue}
      />
      <TextAreaInput
        labelTitle="Acheivements"
        name="acheivements"
        defaultValue={educationData?.acheivements}
        placeholder="Acheivements"
        containerStyle={"col-span-2"}
        updateFormValue={updateFormValue}
      />

      <InputText
        labelTitle="Grades"
        placeholder="Grades Acquired"
        name="grade"
        defaultValue={educationData?.grade}
        updateFormValue={updateFormValue}
        containerStyle={"col-span-2"}
      />

      <InputText
        labelTitle="Institute Address"
        placeholder="Institute Address"
        defaultValue={educationData?.address}
        name="address"
        updateFormValue={updateFormValue}
      />
    </div>
  );
};

export default EducationInputs;
