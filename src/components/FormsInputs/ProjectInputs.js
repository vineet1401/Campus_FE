import React, { useState } from "react";
import InputText from "../Input/InputText";
import TextAreaInput from "../Input/TextAreaInput";

const ProjectInputs = ({ projectData, updateFormValue }) => {
  const [projectInput, setProjectInput] = useState("");

  const updateProjectInput = ({ name, value }) => {
    setProjectInput(value);
  };

  const handleProjectAdd = () => {
    if (projectInput.trim()) {
      const newProjects = [...projectData.description, projectInput.trim()];
      updateFormValue({ name: "description", value: newProjects });
      setProjectInput(""); // Clear the input field
    }
  };

  const handleProjectRemove = (index) => {
    const newProjects = projectData?.description.filter((_, i) => i !== index);
    updateFormValue({ name: "description", value: newProjects });
  };

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
          defaultValue={projectData?.startDate?.substring(0, 10)}
          type="date"
          labelTitle="Start Date"
        />
        <InputText
          name="endDate"
          updateFormValue={updateFormValue}
          defaultValue={projectData?.endDate?.substring(0, 10)}
          type="date"
          labelTitle="End Date"
        />
      </div>

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
        placeholder="Links Seperated By Comma"
        defaultValue={projectData?.links}
        name="links"
        updateFormValue={updateFormValue}
      />

      <div className="col-span-3">
        <TextAreaInput
          labelTitle="Description"
          name="description"
          defaultValue={projectInput}
          placeholder="Description"
          updateFormValue={updateProjectInput}
        />
        <button
          type="button"
          onClick={handleProjectAdd}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Description
        </button>
        <ul className="mt-2 list-disc list-inside">
          {projectData?.description?.map((descp, index) => (
            <li
              key={index}
              className="flex items-center justify-between my-1 rounded-md px-3 bg-slate-300"
            >
              {descp}
              <button
                type="button"
                onClick={() => handleProjectRemove(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInputs;
