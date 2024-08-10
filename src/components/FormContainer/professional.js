import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import SelectBox from "../../components/Input/SelectBox";

function ProfessionalDetailForm({ work, deleteWork, isEditable }) {
  const dispatch = useDispatch();

  const [professionalData, setProfessionalData] = useState(work);

  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ name, value }) => {
    setProfessionalData((prev) => ({ ...prev, [name]: value }));
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
                  document.getElementById("professionalFormModal").showModal()
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

      <dialog id="professionalFormModal" className="modal ">
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
            labelTitle="Company Name"
            defaultValue={professionalData?.companyName}
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
              defaultValue={professionalData?.startDate}
              updateFormValue={updateFormValue}
            />
            <InputText
              name="endDate"
              type="date"
              labelTitle="End Date"
              defaultValue={professionalData?.endDate}
              updateFormValue={updateFormValue}
            />
          </div>

          <InputText
            labelTitle="Position Title"
            name="positionTitle"
            placeholder="Position Title"
            defaultValue={professionalData?.positionTitle}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Key Achievements"
            name="keyAchievements"
            placeholder="Key Achievements"
            defaultValue={professionalData?.keyAchievements}
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />

          <TextAreaInput
            labelTitle="Description"
            name="description"
            defaultValue={professionalData?.description}
            placeholder="Description"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Skills Gained"
            defaultValue={professionalData?.skillsGained}
            name="skillsGained"
            placeholder="Skills Gained"
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

export default ProfessionalDetailForm;
