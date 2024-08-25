import React from 'react'
import InputText from '../Input/InputText'
import TextAreaInput from '../Input/TextAreaInput'

const ProjectInputs = ({projectData, updateFormValue}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    <InputText
      labelTitle="Project Name"
      defaultValue={projectData?.projectName}
      name="projectName"
      placeholder="Project Name"
      updateFormValue={updateFormValue}
    />
    <InputText
      labelTitle="Domain Name"
      name="domainName"
      defaultValue={projectData?.domainName}
      placeholder="Domain Name"
      updateFormValue={updateFormValue}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputText
        name="startDate"
        updateFormValue={updateFormValue}
        defaultValue={projectData?.startDate}
        type="date"
        labelTitle="Start Date"
      />
      <InputText
        name="endDate"
        updateFormValue={updateFormValue}
        defaultValue={projectData?.endDate}
        type="date"
        labelTitle="End Date"
      />
    </div>

    <TextAreaInput
      labelTitle="Description"
      name="description"
      defaultValue={projectData?.description}
      placeholder="Description"
      containerStyle={"col-span-3"}
      updateFormValue={updateFormValue}
    />

    <TextAreaInput
      labelTitle="Tech Stack"
      placeholder="Tech Stack Seperated By Comma"
      name="technologiesUsed"
      defaultValue={projectData?.technologiesUsed}
      updateFormValue={updateFormValue}
      containerStyle={"col-span-2"}
    />

    <TextAreaInput
      labelTitle="Link"
      placeholder="Links"
      defaultValue={projectData?.links}
      name="links"
      updateFormValue={updateFormValue}
    />
  </div>
  )
}

export default ProjectInputs