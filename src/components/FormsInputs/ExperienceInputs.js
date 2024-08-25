import React, { useState } from "react";
import TextAreaInput from "../Input/TextAreaInput";
import InputText from "../Input/InputText";
import SelectBox from "../Input/SelectBox";

const JOBTYPE = [
  {
    name: "Full Time",
    value: "Full Time",
  },
  {
    name: "Internship",
    value: "Internship",
  },
];

const ExperienceInputs = ({ experienceData, updateFormValue }) => {
  const [experienceInput, setExperienceInput] = useState("");

  const updateExperienceInput = ({ name, value }) => {
    setExperienceInput(value);
  };

  const handleExperienceAdd = () => {
    if (experienceInput.trim()) {
      const newExperiences = [
        ...experienceData.keyAchievements,
        experienceInput.trim(),
      ];
      updateFormValue({ name: "keyAchievements", value: newExperiences });
      setExperienceInput(""); // Clear the input field
    }
  };

  const handleExperienceRemove = (index) => {
    const newExperiences = experienceData.keyAchievements.filter(
      (_, i) => i !== index
    );
    updateFormValue({ name: "keyAchievements", value: newExperiences });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <InputText
        labelTitle="Company Name"
        defaultValue={experienceData?.companyName}
        name="companyName"
        placeholder="Company Name"
        updateFormValue={updateFormValue}
        containerStyle={"col-span-2"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          name="startDate"
          type="date"
          labelTitle="Start Date"
          defaultValue={experienceData?.startDate?.substring(0, 10)}
          updateFormValue={updateFormValue}
        />
        <InputText
          name="endDate"
          type="date"
          labelTitle="End Date"
          defaultValue={experienceData?.endDate?.substring(0, 10)}
          updateFormValue={updateFormValue}
        />
      </div>
      <InputText
        labelTitle="Position Title"
        name="positionTitle"
        placeholder="Position Title"
        defaultValue={experienceData?.positionTitle}
        updateFormValue={updateFormValue}
      />
      <TextAreaInput
        labelTitle="Description"
        name="description"
        defaultValue={experienceData?.description}
        placeholder="Description"
        updateFormValue={updateFormValue}
      />
      <TextAreaInput
        labelTitle="Skills Gained"
        defaultValue={experienceData?.skillsGained}
        name="skillsGained"
        placeholder="Skills Gained"
        updateFormValue={updateFormValue}
      />
      <div className="col-span-2">
        <TextAreaInput
          labelTitle="Key Achievements"
          name="experienceInput"
          placeholder="Add Key Achievements"
          defaultValue={experienceInput}
          updateFormValue={updateExperienceInput}
        />
        <button
          type="button"
          onClick={handleExperienceAdd}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Achievement
        </button>
        <ul className="mt-2 list-disc list-inside">
          {experienceData?.keyAchievements?.map((achievement, index) => (
            <li
              key={index}
              className="flex items-center justify-between my-1 rounded-md px-3 bg-slate-300"
            >
              {achievement}
              <button
                type="button"
                onClick={() => handleExperienceRemove(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <SelectBox
        labelTitle="Job Type"
        placeholder="Select Job Type"
        options={JOBTYPE}
        name="jobType"
        updateFormValue={updateFormValue}
        defaultValue={experienceData?.jobType}
      />
    </div>
  );
};

export default ExperienceInputs;
