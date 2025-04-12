import { useDispatch, useSelector } from "react-redux";
import ProjectInputs from "../FormsInputs/ProjectInputs";
import UniversalModal from "../modals/UniversalModal";
import { validateProjectData } from "../../validations/ProfileValidation";
import { updateProjectById } from "../../services/project.service";
import { updateProject } from "../../redux/studentDetailSlice";
import { showNotification } from "../../redux/headerSlice";
import { useEffect, useState } from "react";

const ProjectEditForm = ({ projectDataId }) => {
  const dispatch = useDispatch();
  
  const projectData = useSelector((state) => state.studentData.project).filter(
    (item) => item._id == projectDataId
  )[0];

  const [project, setProject] = useState(projectData);

  useEffect(() => {
    setProject(projectData);
  }, [projectData]);

  const updateProfile = async () => {
    if (validateProjectData(project)) {
      const response = await updateProjectById(projectDataId, project);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(updateProject({ id: projectDataId, data: response.data }));
        document.getElementById("ProjectFormModal").close();
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

  return (
    <UniversalModal
      id="ProjectFormModal"
      title="Project Detail"
      onSave={updateProfile}
    >
      <ProjectInputs
        projectData={projectData}
        updateFormValue={updateFormValue}
      />

      <div className="mt-6">
        <button className="btn btn-primary float-right" onClick={updateProfile}>
          Save
        </button>
      </div>
    </UniversalModal>
  );
};

export default ProjectEditForm;
