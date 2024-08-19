import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import ExperienceDetail from "../../components/DetailContainer/EducationDetail";
import { showNotification } from "../../redux/headerSlice";
import ExperienceInputs from "../../components/FormsInputs/EducationInputs";


function ExperiencePage() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    description: "",
    keyAchievements: "",
    skillsGained: "",
  });


  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    data.push({ ...experience, id: Date.now() });
    setExperience({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      description: "",
      keyAchievements: "",
      skillsGained: "",
    });
  };

  const updateFormValue = ({ name, value }) => {
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const deleteWork = (id) => {
    setData(data.filter((work) => work.id != id));
  };

  return (
    <>
      <TitleCard title="Professonal Detail" topMargin="mt-2">
        <h4 className="font-semibold">Work Experience</h4>
        
        <ExperienceInputs experienceData={experience} updateFormValue={updateFormValue} />

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
        {
          data.length ? (
            data.map((work) => (
              <ExperienceDetail
                key={work.id}
                work={work}
                deleteWork={() => deleteWork(work.id)}
                isEditable={true}
              />
            ))
          ) : (
            <h2 className="font-semibold">No Experience Added</h2>
          )
        }
      </TitleCard>
    </>
  );
}

export default ExperiencePage;
