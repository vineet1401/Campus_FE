import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import { updateExperience } from "../../redux/studentDetailSlice";
import { updateExperienceById } from "../../services/experience.service";
import { validateExperienceData } from "../../validations/ProfileValidation";
import ExperienceInputs from "../FormsInputs/ExperienceInputs";
import UniversalModal from "../modals/UniversalModal";
import { useEffect, useState } from "react";

const ExperienceEditForm = ({ experienceDataId }) => {

  const dispatch = useDispatch();

  const experienceData = useSelector(
    (state) => state.studentData.experience
  ).filter((item) => item._id == experienceDataId)[0];

  console.log(experienceData)
  const [experience, setExperience] = useState(experienceData);

  useEffect(() => {
    setExperience(experienceData);
  }, [experienceData]);

  const updateProfile = async () => {
    if (validateExperienceData(experience)) {
      const response = await updateExperienceById(experienceDataId, experience);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(updateExperience({id:experienceDataId, data:response.data}));
        document.getElementById("ExperienceFormModal").close();
      } else {
        dispatch(showNotification({ message: response.message, status: 0 }));
      }
    } else {
      dispatch(
        showNotification({ message: "All Feilds are mandatory", status: 0 })
      );
    }
  };

  const updateFormValue = ({ name, value }) => {
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <UniversalModal id="ExperienceFormModal" title="Work Experience">
      <ExperienceInputs
        experienceData={experience}
        updateFormValue={updateFormValue}
      />
      <div className="mt-6">
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={updateProfile}
        >
          Save
        </button>
      </div>
    </UniversalModal>
  );
};

export default ExperienceEditForm;
