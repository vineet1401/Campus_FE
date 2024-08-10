import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../../redux/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import SelectBox from "../../../components/Input/SelectBox";
import EducationDetailForm from "../../../components/FormContainer/education";

const GENDER = [
  {
    name: "Male",
    value: "Male",
  },
  {
    name: "Female",
    value: "Female",
  },
];

const internshipData = [
  {
    companyName: "Tech Solutions Inc.",
    role: "Software Developer Intern",
    title: "Frontend Development Internship",
    startDate: "June 1, 2023",
    endDate: "August 31, 2023",
    acheivements:
      "This internship involved educationing on multiple educations including web development, API integration, and database management...",
    keySkills: ["JavaScript", "React", "Node.js", "Database Management"],
    achievements: [
      "Developed a full-stack application for internal use.",
      "Improved database query efficiency by 20%.",
      "Automated daily tasks, reducing manual education by 30%.",
    ],
  },
  {
    companyName: "Tech Solutions Inc.",
    role: "Software Developer Intern",
    title: "Frontend Development Internship",
    startDate: "June 1, 2023",
    endDate: "August 31, 2023",
    acheivements:
      "This internship involved educationing on multiple educations including web development, API integration, and database management...",
    keySkills: ["JavaScript", "React", "Node.js", "Database Management"],
    achievements: [
      "Developed a full-stack application for internal use.",
      "Improved database query efficiency by 20%.",
      "Automated daily tasks, reducing manual education by 30%.",
    ],
  },
];

function EducationDetail() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [education, setEducation] = useState({
    institutionName: "",
    address: "",
    startDate: "",
    endDate: "",
    acheivements: "",
    degree: "",
    grade: "",
  });

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    data.push({ ...education, id: Date.now() });
    setEducation({
      institutionName: "",
      address: "",
      startDate: "",
      endDate: "",
      acheivements: "",
      degree: "",
      grade: "",
    });
  };

  const updateFormValue = ({ name, value }) => {
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const deleteEducation = (id) => {
    setData(data.filter((education) => education.id != id));
  };

  return (
    <>
      <TitleCard title="Education Detail" topMargin="mt-2">
        <h4 className="font-semibold">Educations</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <InputText
            labelTitle="Institution Name"
            defaultValue={education.institutionName}
            name="institutionName"
            placeholder="Institution Name"
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />
          <InputText
            labelTitle="Degree Name"
            name="degree"
            defaultValue={education.degree}
            placeholder="Degree Name"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Acheivements"
            name="acheivements"
            defaultValue={education.acheivements}
            placeholder="Acheivements"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputText
              name="startDate"
              updateFormValue={updateFormValue}
              defaultValue={education.startDate}
              type="date"
              labelTitle="Start Date"
            />
            <InputText
              name="endDate"
              updateFormValue={updateFormValue}
              defaultValue={education.endDate}
              type="date"
              labelTitle="End Date"
            />
          </div>
          <InputText
            labelTitle="Grades"
            placeholder="Grades Acquired"
            name="grade"
            defaultValue={education.grade}
            updateFormValue={updateFormValue}
          />

          <InputText
            labelTitle="Institute Address"
            placeholder="Institute Address"
            defaultValue={education.address}
            name="address"
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />
        </div>

        <div className="mt-6">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Add Education
          </button>
        </div>
      </TitleCard>

      <TitleCard title={"Your educations"}>
        {data.length ? (
          data.map((edu) => (
            <EducationDetailForm
              key={edu.id}
              education={edu}
              deleteEducation={() => deleteEducation(edu.id)}
              isEditable={true}
            />
          ))
        ) : (
          <h2 className="font-semibold">No Education Added</h2>
        )}
      </TitleCard>
    </>
  );
}

export default EducationDetail;
