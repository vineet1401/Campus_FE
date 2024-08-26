import React, { useState } from "react";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";

const EducationInputs = ({ educationData, updateFormValue }) => {
  
  const [achievementInput, setAchievementInput] = useState("");

  const updateAchievementInput = ({ name, value }) => {
    setAchievementInput(value);
  };

  const handleAchievementAdd = () => {
    if (achievementInput.trim()) {
      const newAchievements = [
        ...educationData.achievements,
        achievementInput.trim(),
      ];
      updateFormValue({ name: "achievements", value: newAchievements });
      setAchievementInput(""); // Clear the input field
    }
  };

  const handleAchievementRemove = (index) => {
    const newAchievements = educationData.achievements.filter(
      (_, i) => i !== index
    );
    updateFormValue({ name: "achievements", value: newAchievements });
  };

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
          defaultValue={educationData?.startDate?.substring(0, 10)}
          type="date"
          labelTitle="Start Date"
        />
        <InputText
          name="endDate"
          updateFormValue={updateFormValue}
          defaultValue={educationData?.endDate?.substring(0, 10)}
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

      <InputText
        labelTitle="Grades"
        placeholder="Grades Acquired"
        name="grade"
        defaultValue={educationData?.grade}
        updateFormValue={updateFormValue}
        containerStyle={"col-span-2"}
      />

      <div className="col-span-2">
        <TextAreaInput
          labelTitle="Acheivements"
          name="achievementInput"
          defaultValue={achievementInput}
          placeholder="Add an achievement..."
          updateFormValue={updateAchievementInput}
        />
        <button
          type="button"
          onClick={handleAchievementAdd}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Achievement
        </button>
        <ul className="mt-2 list-disc list-inside">
          {educationData?.achievements?.map((achievement, index) => (
            <li
              key={index}
              className="flex items-center justify-between my-1 rounded-md px-3 bg-slate-300"
            >
              {achievement}
              <button
                type="button"
                onClick={() => handleAchievementRemove(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>

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
