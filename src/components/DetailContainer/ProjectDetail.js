import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import ProjectEditForm from "../EditFormLayout/ProjectEditForm";

function ProjectDetail({ project, deleteProject, isEditable }) {
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

      <ProjectEditForm
        projectData={projectData}
        updateFormValue={updateFormValue}
        updateProfile={updateProfile}
      />
    </>
  );
}

export default ProjectDetail;
