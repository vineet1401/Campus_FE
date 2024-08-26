import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";

import ProjectDetail from "../../components/DetailContainer/ProjectDetail";
import ProjectInputs from "../../components/FormsInputs/ProjectInputs";

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


function ProjectPage() {
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

        <ProjectInputs
          updateFormValue={updateFormValue}
          projectData={project}
        />

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
            <ProjectDetail
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

export default ProjectPage;
