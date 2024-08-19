import ExperienceInputs from "../FormsInputs/ExperienceInputs";
import UniversalModal from "../modals/UniversalModal";

const ExperienceEditForm = ({
  experienceData,
  updateFormValue,
  updateProfile,
}) => {
  return (
    <UniversalModal
      id="ExperienceFormModal"
      title="Work Experience"
    >
      <ExperienceInputs
        experienceData={experienceData}
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
