import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import EducationDetail from "../../components/DetailContainer/EducationDetail";
import EducationInputs from "../../components/FormsInputs/EducationInputs";
import {
  createEducation,
  deleteEducationById,
} from "../../services/education.service";
import { addEducation, removeEducation } from "../../redux/studentDetailSlice";
import EducationEditForm from "../../components/EditFormLayout/EducationEditForm";
import { validateEducationData } from "../../validations/ProfileValidation";

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

const INITIAL_EDUCATION = {
  institutionName: "",
  address: "",
  startDate: "",
  endDate: "",
  achievements: [],
  degree: "",
  grade: "",
};

function EducationPage() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.studentData.education);

  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [educationDataId, setEducationDataId] = useState("");

  // Call API to update profile settings changes

  const updateProfile = async () => {

    if (validateEducationData(education)) {
      const response = await createEducation(education);
      if (response.status) {
        dispatch(showNotification({ message: response.message, status: 1 }));
        dispatch(addEducation(response.data));
        setEducation(INITIAL_EDUCATION);
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

  const deleteEducation = async (id) => {
    const response = await deleteEducationById(id);
    if (response.status) {
      dispatch(showNotification({ message: response.message, status: 1 }));
      dispatch(removeEducation(id));
    } else {
      dispatch(showNotification({ message: response.message, status: 0 }));
    }
  };

  return (
    <>
      <TitleCard title="Education Detail" topMargin="mt-2">
        <h4 className="font-semibold">Educations</h4>

        <EducationInputs
          educationData={education}
          updateFormValue={updateFormValue}
        />

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
            <EducationDetail
              key={edu._id}
              education={edu}
              deleteEducation={() => deleteEducation(edu._id)}
              editEducation={() => setEducationDataId(edu._id)}
              isEditable={true}
            />
          ))
        ) : (
          <h2 className="font-semibold">No Education Added</h2>
        )}
      </TitleCard>

      <EducationEditForm educationDataId={educationDataId} />
    </>
  );
}

export default EducationPage;
