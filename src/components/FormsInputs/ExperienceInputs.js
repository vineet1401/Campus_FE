import React from 'react'
import TextAreaInput from '../Input/TextAreaInput'
import InputText from '../Input/InputText'

const ExperienceInputs = ({experienceData, updateFormValue}) => {
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
        defaultValue={experienceData?.startDate}
        updateFormValue={updateFormValue}
      />
      <InputText
        name="endDate"
        type="date"
        labelTitle="End Date"
        defaultValue={experienceData?.endDate}
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
      labelTitle="Key Achievements"
      name="keyAchievements"
      placeholder="Key Achievements"
      defaultValue={experienceData?.keyAchievements}
      updateFormValue={updateFormValue}
      containerStyle={"col-span-2"}
    />
    <TextAreaInput
      labelTitle="Description"
      name="description"
      defaultValue={experienceData?.description}
      placeholder="Description"
      containerStyle={"col-span-2"}
      updateFormValue={updateFormValue}
    />
    <TextAreaInput
      labelTitle="Skills Gained"
      defaultValue={experienceData?.skillsGained}
      name="skillsGained"
      placeholder="Skills Gained"
      updateFormValue={updateFormValue}
    />
  </div>
  )
}

export default ExperienceInputs