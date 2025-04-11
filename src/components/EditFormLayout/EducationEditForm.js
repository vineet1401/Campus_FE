import { useDispatch, useSelector } from "react-redux";
import EducationInputs from "../FormsInputs/EducationInputs";
import UniversalModal from "../modals/UniversalModal";
import { showNotification } from "../../redux/headerSlice";
import { useEffect, useState } from "react";
import { validateEducationData } from "../../validations/ProfileValidation";
import { updateEducationById } from "../../services/education.service";
import { updateEducation } from "../../redux/studentDetailSlice";

const EducationEditForm = ({ educationDataId }) => {
  console.log(educationDataId);

  const dispatch = useDispatch();
  const educationData = useSelector(
    (state) => state.studentData.education
  ).filter((item) => item._id == educationDataId)[0];

  const [education, setEducation] = useState(educationData);

  useEffect(() => {
    setEducation(educationData);
  }, [educationData]);

  const updateProfile = async () => {
    if (validateEducationData(education)) {
      const response = await updateEducationById(educationDataId, education);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(updateEducation({id:educationDataId, data:response.data}));
        document.getElementById("educationFormModal").close();
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
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <UniversalModal id="EducationFormModal" title="Education Detail">
      <EducationInputs
        educationData={education}
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
