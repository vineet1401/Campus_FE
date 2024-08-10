import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";

const EducationDetailForm = ({ education, deleteEducation, isEditable }) => {
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

      <dialog id="educationFormModal" className="modal ">
        <div className="modal-box  w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h4 className="font-semibold">Education Experience</h4>
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
                  defaultValue={educationData?.startDate}
                  type="date"
                  labelTitle="Start Date"
                />
                <InputText
                  name="endDate"
                  updateFormValue={updateFormValue}
                  defaultValue={educationData?.endDate}
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
              <TextAreaInput
                labelTitle="Acheivements"
                name="acheivements"
                defaultValue={educationData?.acheivements}
                placeholder="Acheivements"
                containerStyle={"col-span-2"}
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

              <InputText
                labelTitle="Institute Address"
                placeholder="Institute Address"
                defaultValue={educationData?.address}
                name="address"
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

export default EducationDetailForm;
