import React from "react";

function ProjectDetail({ project, deleteProject, isEditable, editProject }) {

  const EditForm = () => {
    editProject();
    document.getElementById("ProjectFormModal").showModal();
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
              {project?.startDate.substring(0, 10)}
            </p>
            <p>
              <span className="font-bold">End Date:</span>{" "}
              {project?.endDate.substring(0, 10)}
            </p>
          </div>

          <div className="mb-2">
            <h4 className="font-bold">Description :</h4>
            <ul className="list-disc pl-5">
              {project?.description?.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <h4 className="font-bold">Technologies Used:</h4>
            <ul className="list-disc pl-5">
              {project?.technologiesUsed?.split(",").map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <h4 className="font-bold">Project Links:</h4>
            <ul className="list-disc pl-5">
              {project?.links?.split(",").map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {isEditable && (
            <div className="card-actions justify-end">
              <button
                onClick={EditForm}
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

    </>
  );
}

export default ProjectDetail;
