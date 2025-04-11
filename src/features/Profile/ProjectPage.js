import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";

import ProjectDetail from "../../components/DetailContainer/ProjectDetail";
import ProjectInputs from "../../components/FormsInputs/ProjectInputs";


import { validateProjectData } from "../../validations/ProfileValidation";
import { deleteProjectById, createProject } from "../../services/project.service";
import {
  addProject,
  removeProject,
} from "../../redux/studentDetailSlice";
import ProjectEditForm from "../../components/EditFormLayout/ProjectEditForm";


const INITIAL_PROJECT = {
  projectName: "",
  domainName: "",
  startDate: "",
  endDate: "",
  description: [],
  technologiesUsed: "",
  links: "",
}


function ProjectPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.studentData.project);

  console.log(data)
  const [projectDataId, setProjectDataId] = useState("");
  const [project, setProject] = useState(INITIAL_PROJECT);

  // Call API to update profile settings changes
  const updateProfile = async () => {

    if (validateProjectData(project)) {
      const response = await createProject(project);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(addProject(response.data));
        setProject(INITIAL_PROJECT);
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
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const deleteProject = async (id) => {
    const response = await deleteProjectById(id);
    if (response.status) {
      dispatch(showNotification({ message: response.message, status: 1 }));
      dispatch(removeProject(id));
    } else {
      dispatch(showNotification({ message: response.message, status: 0 }));
    }
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
              key={project._id}
              project={project}
              deleteProject={() => deleteProject(project.id)}
              editProject={() => setProjectDataId(project._id)}
              isEditable={true}
            />
          ))
        ) : (
          <h2 className="font-semibold">No Project Added</h2>
        )}
      </TitleCard>

      <ProjectEditForm projectDataId={projectDataId} />
    </>
  );
}

export default ProjectPage;
