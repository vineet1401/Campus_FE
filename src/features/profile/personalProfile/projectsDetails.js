import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../../redux/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import SelectBox from "../../../components/Input/SelectBox";
import ProjectDetailForm from "../../../components/FormContainer/project";
import { Title } from "chart.js";

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
    description:
      "This internship involved projecting on multiple projects including web development, API integration, and database management...",
    keySkills: ["JavaScript", "React", "Node.js", "Database Management"],
    achievements: [
      "Developed a full-stack application for internal use.",
      "Improved database query efficiency by 20%.",
      "Automated daily tasks, reducing manual project by 30%.",
    ],
  },
  {
    companyName: "Tech Solutions Inc.",
    role: "Software Developer Intern",
    title: "Frontend Development Internship",
    startDate: "June 1, 2023",
    endDate: "August 31, 2023",
    description:
      "This internship involved projecting on multiple projects including web development, API integration, and database management...",
    keySkills: ["JavaScript", "React", "Node.js", "Database Management"],
    achievements: [
      "Developed a full-stack application for internal use.",
      "Improved database query efficiency by 20%.",
      "Automated daily tasks, reducing manual project by 30%.",
    ],
  },
];

function ProjectDetail() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [project, setProject] = useState({
    projectName: "",
    domainName: "",
    startDate: "",
    endDate: "",
    description: "",
    technologiesUsed: "",
    links: "",
  });

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    data.push({ ...project, id: Date.now() });
    setProject({
      projectName: "",
      domainName: "",
      startDate: "",
      endDate: "",
      description: "",
      technologiesUsed: "",
      links: "",
    });
  };

  const updateFormValue = ({ name, value }) => {
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const deleteProject = (id) => {
    setData(data.filter((project) => project.id != id));
  };

  return (
    <>
      <TitleCard title="Project Detail" topMargin="mt-2">
        <h4 className="font-semibold">Projects</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <InputText
            labelTitle="Project Name"
            defaultValue={project.projectName}
            name="projectName"
            placeholder="Project Name"
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputText
              name="startDate"
              updateFormValue={updateFormValue}
              defaultValue={project.startDate}
              type="date"
              labelTitle="Start Date"
            />
            <InputText
              name="endDate"
              updateFormValue={updateFormValue}
              defaultValue={project.endDate}
              type="date"
              labelTitle="End Date"
            />
          </div>
          <InputText
            labelTitle="Domain Name"
            name="domainName"
            defaultValue={project.domainName}
            placeholder="Domain Name"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Description"
            name="description"
            defaultValue={project.description}
            placeholder="Description"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />

          <TextAreaInput
            labelTitle="Tech Stack"
            placeholder="Tech Stack Seperated By Comma"
            name="technologiesUsed"
            defaultValue={project.technologiesUsed}
            updateFormValue={updateFormValue}
            containerStyle={"col-span-2"}
          />

          <TextAreaInput
            labelTitle="Link"
            placeholder="Links"
            defaultValue={project.links}
            name="links"
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-6">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Add Project
          </button>
        </div>
      </TitleCard>

      <TitleCard title={"Your Projects"}>
        {data.length ? (
          data.map((project) => (
            <ProjectDetailForm
              key={project.id}
              project={project}
              deleteProject={() => deleteProject(project.id)}
              isEditable={true}
            />
          ))
        ) : (
          <h2 className="font-semibold">No Project Added</h2>
        )}
      </TitleCard>
    </>
  );
}

export default ProjectDetail;
