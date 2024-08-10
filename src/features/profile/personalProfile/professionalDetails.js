import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import ProfessionalDetailForm from "../../../components/FormContainer/professional";
import InputText from "../../../components/Input/InputText";
import SelectBox from "../../../components/Input/SelectBox";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import { showNotification } from "../../../redux/headerSlice";

const internshipData = [
  {
    companyName: "Tech Solutions Inc.",
    positionTitle: "Software Developer Intern",
    startDate: "June 1, 2023",
    endDate: "August 31, 2023",
    description:
      "This internship involved working on multiple projects including web development, API integration, and database management...",
    skillsGained: ["JavaScript", "React", "Node.js", "Database Management"],
    keyAchievements: [
      "Developed a full-stack application for internal use.",
      "Improved database query efficiency by 20%.",
      "Automated daily tasks, reducing manual work by 30%.",
    ],
  },
];

function ProfessionalDetail() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [professional, setProfessional] = useState({
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
    data.push({ ...professional, id: Date.now() });
    setProfessional({
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
    setProfessional((prev) => ({ ...prev, [name]: value }));
  };

  const deleteWork = (id) => {
    setData(data.filter((work) => work.id != id));
  };

  return (
    <>
      <TitleCard title="Professonal Detail" topMargin="mt-2">
        <h4 className="font-semibold">Work Experience</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <InputText
            labelTitle="Company Name"
            defaultValue={professional.companyName}
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
              defaultValue={professional.startDate}
              updateFormValue={updateFormValue}
            />
            <InputText
              name="endDate"
              type="date"
              labelTitle="End Date"
              defaultValue={professional.endDate}
              updateFormValue={updateFormValue}
            />
          </div>

          <InputText
            labelTitle="Position Title"
            name="positionTitle"
            placeholder="Position Title"
            defaultValue={professional.positionTitle}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Key Achievements"
            name="keyAchievements"
            placeholder="Key Achievements"
            defaultValue={professional.keyAchievements}
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />

          <TextAreaInput
            labelTitle="Description"
            name="description"
            defaultValue={professional.description}
            placeholder="Description"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Skills Gained"
            defaultValue={professional.skillsGained}
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
            Add Experience
          </button>
        </div>
      </TitleCard>

      <TitleCard title={"Your Experience"}>
        {
          data.length ? (
            data.map((work) => (
              <ProfessionalDetailForm
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

export default ProfessionalDetail;
