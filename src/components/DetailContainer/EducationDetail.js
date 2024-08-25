import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import EducationEditForm from "../EditFormLayout/EducationEditForm";

const EducationDetail = ({ education, deleteEducation, isEditable }) => {
  const dispatch = useDispatch();

  const [educationData, setEducationData] = useState(education);

  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ name, value }) => {
    setEducationData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <div className="container mx-auto p-2"> */}
      <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {education?.institutionName}
          </h2>

          <div className="my-1">
            <p>
              <span className="font-bold">Degree:</span> {education?.degree}
            </p>
            <p className="my-1">
              <span className="font-bold">Grade:</span> {education?.grade}
            </p>
            <p className="my-1">
              <span className="font-bold">Start Date:</span>{" "}
              {education?.startDate}
            </p>
            <p className="my-1">
              <span className="font-bold">End Date:</span> {education?.endDate}
            </p>
            <p className="my-1">
              <span className="font-bold">Address:</span> {education?.address}
            </p>
          </div>

          <div className="mb-2">
            <h4 className="font-bold">Key Acheivements:</h4>
            <ul className="list-disc pl-5">
              {/* {skillsGained.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))} */}
              <li>{education?.acheivements}</li>
            </ul>
          </div>

          {isEditable && (
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("educationFormModal").showModal()
                }
                className="btn btn-neutral"
              >
                Edit
              </button>
              <button onClick={deleteEducation} className="btn btn-error">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}

      <EducationEditForm
        updateFormValue={updateFormValue}
        updateProfile={updateProfile}
        educationData={educationData}
      />
    </>
  );
};

export default EducationDetail;
