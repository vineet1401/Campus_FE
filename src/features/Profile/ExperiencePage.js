import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import ExperienceDetail from "../../components/DetailContainer/ExperienceDetail";
import { showNotification } from "../../redux/headerSlice";
import ExperienceInputs from "../../components/FormsInputs/ExperienceInputs";
import {
  addExperience,
  removeExperience,
} from "../../redux/studentDetailSlice";
import { createExperience, deleteExperienceById } from "../../services/experience.service";
import ExperienceEditForm from "../../components/EditFormLayout/ExperienceEditForm";
import { validateExperienceData } from "../../validations/ProfileValidation";

const INITIAL_WORK = {
  companyName: "",
  positionTitle: "",
  startDate: "",
  endDate: "",
  description: "",
  keyAchievements: [],
  skillsGained: "",
  jobType: "",
};



function ExperiencePage() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.studentData.experience);

  const [experienceDataId, setExperienceDataId] = useState("");
  const [experience, setExperience] = useState(INITIAL_WORK);

  // Call API to update profile settings changes
  const updateProfile = async () => {

    if (validateExperienceData(experience)) {
      const response = await createExperience(experience);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(addExperience(response.data));
        setExperience(INITIAL_WORK);
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

  const deleteWork = async (id) => {
    const response = await deleteExperienceById(id);
    if (response.status) {
      dispatch(showNotification({ message: response.message, status: 1 }));
      dispatch(removeExperience(id));
    } else {
      dispatch(showNotification({ message: response.message, status: 0 }));
    }
  };

  return (
    <>
      <TitleCard title="Professonal Detail" topMargin="mt-2">
        <h4 className="font-semibold">Work Experience</h4>

        <ExperienceInputs
          experienceData={experience}
          updateFormValue={updateFormValue}
        />

        <div className="mt-6">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Add Experience
          </button>
        </div>
      </TitleCard>

      <TitleCard title={"Your Experience"}>
        {data.length ? (
          data.map((work) => (
            <ExperienceDetail
              key={work._id}
              work={work}
              deleteWork={() => deleteWork(work._id)}
              editWork={() => setExperienceDataId(work._id)}
              isEditable={true}
            />
          ))
        ) : (
          <h2 className="font-semibold">No Experience Added</h2>
        )}
      </TitleCard>

      <ExperienceEditForm experienceDataId={experienceDataId} />
    </>
  );
}

export default ExperiencePage;
