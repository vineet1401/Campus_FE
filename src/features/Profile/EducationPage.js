import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import EducationDetail from "../../components/DetailContainer/EducationDetail";
import EducationInputs from "../../components/FormsInputs/EducationInputs";

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
  acheivements: "",
  degree: "",
  grade: "",
};

function EducationPage() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [education, setEducation] = useState(INITIAL_EDUCATION);

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    data.push({ ...education, id: Date.now() });
    setEducation(INITIAL_EDUCATION);
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

export default EducationPage;
