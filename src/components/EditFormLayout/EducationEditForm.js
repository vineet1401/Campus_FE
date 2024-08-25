import EducationInputs from "../FormsInputs/EducationInputs";
import UniversalModal from "../modals/UniversalModal";

const EducationEditForm = ({
  educationData,
  updateFormValue,
  updateProfile,
}) => {
  return (
    <UniversalModal
      id="educationFormModal"
      title="Education Detail"
      onSave={updateProfile}
    >
      <EducationInputs
        educationData={educationData}
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

export default EducationEditForm;
