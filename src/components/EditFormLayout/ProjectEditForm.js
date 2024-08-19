import ProjectInputs from "../FormsInputs/ProjectInputs";
import UniversalModal from "../modals/UniversalModal";

const ProjectEditForm = ({ projectData, updateFormValue, updateProfile }) => {
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
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Save
          </button>
        </div>
      </UniversalModal>
    );
  };

  export default ProjectEditForm;