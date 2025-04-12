import React, { useState } from "react";

function ExperienceDetail({ work, deleteWork, isEditable, editWork }) {

  const EditForm = () => {
    editWork();
    document.getElementById("ExperienceFormModal").showModal();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <div className="container mx-auto p-2"> */}
      <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{work?.companyName}</h2>

          <div className="my-1">
            <p>
              <span className="font-bold">Position Title:</span>{" "}
              {work?.positionTitle}
            </p>
            <p>
              <span className="font-bold">Job Type:</span>{" "}
              {work?.jobType}
            </p>
            <p>
              <span className="font-bold">Start Date:</span>{" "}
              {work?.startDate.substring(0, 10)}
            </p>
            <p>
              <span className="font-bold">End Date:</span>{" "}
              {work?.endDate.substring(0, 10)}
            </p>
          </div>

          <p className="mb-2">
            <span className="font-bold">Description:</span> {work?.description}
          </p>

          <div className="mb-2">
            <h4 className="font-bold">Key Skills:</h4>
            <ul className="list-disc pl-5">
              {/* {skillsGained.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))} */}
              <li>{work?.skillsGained}</li>
            </ul>
          </div>

          <div className="mb-2">
            <h4 className="font-bold">keyAchievements:</h4>
            <ul className="list-disc pl-5">
              {work?.keyAchievements?.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {isEditable && (
            <div className="card-actions justify-end">
              <button onClick={EditForm} className="btn btn-neutral">
                Edit
              </button>
              <button onClick={deleteWork} className="btn btn-error">
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

export default ExperienceDetail;
