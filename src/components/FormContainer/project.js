import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";

function ProjectDetailForm({ project, deleteProject, isEditable }) {
  const dispatch = useDispatch();

  const [projectData, setProjectData] = useState(project);

  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ name, value }) => {
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <div className="container mx-auto p-2"> */}
      <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {project?.projectName}
          </h2>

          <div className="my-1">
            <p>
              <span className="font-bold">Domain:</span> {project?.domainName}
            </p>
            <p>
              <span className="font-bold">Start Date:</span>{" "}
              {project?.startDate}
            </p>
            <p>
              <span className="font-bold">End Date:</span> {project?.endDate}
            </p>
          </div>

          <p className="mb-2">
            <span className="font-bold">Description:</span>{" "}
            {project?.description}
          </p>

          <div className="mb-2">
            <h4 className="font-bold">Technologies Used:</h4>
            <ul className="list-disc pl-5">
              {/* {project?.keySkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))} */}
              <li>{project?.technologiesUsed}</li>
            </ul>
          </div>

          <div className="mb-2">
            <h4 className="font-bold">Achievements:</h4>
            <ul className="list-disc pl-5">
              {/* {project?.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))} */}
              <li> {project?.links} </li>
            </ul>
          </div>

          {isEditable && (
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("projectFormModal").showModal()
                }
                className="btn btn-neutral"
              >
                Edit
              </button>
              <button onClick={deleteProject} className="btn btn-error">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}

      <dialog id="projectFormModal" className="modal ">
        <div className="modal-box  w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h4 className="font-semibold">Work Experience</h4>
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

            <div className="mt-6">
              <button
                className="btn btn-primary float-right"
                onClick={() => updateProfile()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ProjectDetailForm;
