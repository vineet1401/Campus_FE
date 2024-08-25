import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import ExperienceEditForm from "../EditFormLayout/ExperienceEditForm";

function ExperienceDetail({ work, deleteWork, isEditable }) {
  const dispatch = useDispatch();

  const [experienceData, setExperienceData] = useState(work);

  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ name, value }) => {
    setExperienceData((prev) => ({ ...prev, [name]: value }));
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
              <span className="font-bold">positionTitle:</span>{" "}
              {work?.positionTitle}
            </p>
            <p>
              <span className="font-bold">Start Date:</span> {work?.startDate}
            </p>
            <p>
              <span className="font-bold">End Date:</span> {work?.endDate}
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
              {/* {keyAchievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))} */}
              <li>{work?.keyAchievements}</li>
            </ul>
          </div>

          {isEditable && (
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("ExperienceFormModal").showModal()
                }
                className="btn btn-neutral"
              >
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

      <ExperienceEditForm
        experienceData={experienceData}
        updateFormValue={updateFormValue}
        updateProfile={updateProfile}
      />
    </>
  );
}



export default ExperienceDetail;
