import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ToogleInput from "../../components/Input/ToogleInput";
import SelectBox from "../../components/Input/SelectBox";
import { updateStudentById } from "../../services/student.service";
import { setPersonalData } from "../../redux/studentDetailSlice";

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

const initialObj = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  about: "",
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  profilePicture: "",
  emergencyContact: {
    name: "",
    relationship: "",
    phoneNumber: "",
  },
};

function PersonalPage() {
  const dispatch = useDispatch();

  const personalData = useSelector((state) => state.studentData.personal);

  const [personal, setPersonal] = useState(personalData);
  const [isEditing, setIsEditing] = useState(false);

  const updateProfile = async () => {
    const response = await updateStudentById(personal);
    if (response.status) {
      dispatch(showNotification({ message: response.message, status: 1 }));
      dispatch(setPersonalData(response.data));
      setIsEditing(false)
    } else {
      dispatch(showNotification({ message: response.message, status: 0 }));
    }
  };

  const updateFormValue = ({ name, value }) => {
    const nameParts = name.split(".");

    setPersonal((prev) => {
      const updateNestedObject = (obj, parts, value) => {
        if (parts.length === 1) {
          return { ...obj, [parts[0]]: value };
        }
        const [currentPart, ...restParts] = parts;
        return {
          ...obj,
          [currentPart]: updateNestedObject(obj[currentPart], restParts, value),
        };
      };

      return updateNestedObject(prev, nameParts, value);
    });
  };

  return (
    <>
      <TitleCard title="Personal? Detail" topMargin="mt-2">
        <h4 className="font-semibold">PERSONAL? DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText
            labelTitle="First Name"
            readOnly={!isEditing}
            placeholder="First Name"
            updateFormValue={updateFormValue}
            name="firstName"
            defaultValue={personal?.firstName}
          />
          <InputText
            labelTitle="Middle Name"
            readOnly={!isEditing}
            placeholder="Middle Name"
            updateFormValue={updateFormValue}
            name="middleName"
            defaultValue={personal?.middleName}
          />
          <InputText
            labelTitle="Last Name"
            readOnly={!isEditing}
            placeholder="Last Name"
            updateFormValue={updateFormValue}
            name="lastName"
            defaultValue={personal?.lastName}
          />
          <InputText
            labelTitle="Email Id"
            readOnly={!isEditing}
            placeholder="Email Id"
            updateFormValue={updateFormValue}
            name="email"
            type="email"
            defaultValue={personal?.email}
          />
          <InputText
            labelTitle="Phone Number"
            readOnly={!isEditing}
            placeholder="Phone Number"
            updateFormValue={updateFormValue}
            name="phoneNumber"
            defaultValue={personal?.phoneNumber}
          />
          <SelectBox
            labelTitle="Gender"
            readOnly={!isEditing}
            placeholder="Select Gender"
            options={GENDER}
            name="gender"
            updateFormValue={updateFormValue}
            defaultValue={personal?.gender}
          />
          <InputText
            type={"date"}
            updateFormValue={updateFormValue}
            labelTitle={"Date of Birth"}
            readOnly={!isEditing}
            name="dateOfBirth"
            defaultValue={personal?.dateOfBirth?.substring(0, 10)}
          />
          <TextAreaInput
            labelTitle="About"
            readOnly={!isEditing}
            placeholder="About"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
            name="about"
            defaultValue={personal?.about}
          />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">ADDRESS DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText
            labelTitle="Street"
            readOnly={!isEditing}
            placeholder="Street"
            updateFormValue={updateFormValue}
            name="address.street"
            defaultValue={personal?.address.street}
          />
          <InputText
            labelTitle="City"
            readOnly={!isEditing}
            placeholder="City"
            updateFormValue={updateFormValue}
            name="address.city"
            defaultValue={personal?.address.city}
          />
          <InputText
            labelTitle="State"
            readOnly={!isEditing}
            placeholder="State"
            updateFormValue={updateFormValue}
            name="address.state"
            defaultValue={personal?.address.state}
          />
          <InputText
            labelTitle="Postal Code"
            readOnly={!isEditing}
            placeholder="Postal Code"
            updateFormValue={updateFormValue}
            name="address.postalCode"
            defaultValue={personal?.address.postalCode}
          />
          <InputText
            labelTitle="Country"
            readOnly={!isEditing}
            placeholder="Country"
            updateFormValue={updateFormValue}
            name="address.country"
            defaultValue={personal?.address.country}
          />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">EMERGENCY CONTACT DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText
            labelTitle="Name"
            readOnly={!isEditing}
            placeholder="Name"
            updateFormValue={updateFormValue}
            name="emergencyContact.name"
            defaultValue={personal?.emergencyContact.name}
          />
          <InputText
            labelTitle="Relation"
            readOnly={!isEditing}
            placeholder="Relation"
            updateFormValue={updateFormValue}
            name="emergencyContact.relationship"
            defaultValue={personal?.emergencyContact.relationship}
          />
          <InputText
            labelTitle="Contact Number"
            readOnly={!isEditing}
            placeholder="Contact Number"
            updateFormValue={updateFormValue}
            name="emergencyContact.phoneNumber"
            defaultValue={personal?.emergencyContact.phoneNumber}
          />
        </div>

        <div className="mt-16">
          {isEditing ? (
            <button
              className="btn btn-success float-right"
              onClick={() => updateProfile()}
            >
              Save
            </button>
          ) : (
            <button
              className="btn bg-slate-500 float-right"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </TitleCard>
    </>
  );
}

export default PersonalPage;
