import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../../redux/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ToogleInput from "../../components/Input/ToogleInput";
import SelectBox from "../../components/Input/SelectBox";

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

function PersonalPage() {
  const dispatch = useDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <TitleCard title="Personal Detail" topMargin="mt-2">
        <h4 className="font-semibold">PERSONAL DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText
            labelTitle="First Name"
            placeholder="First Name"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Middle Name"
            placeholder="Middle Name"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Last Name"
            placeholder="Last Name"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            placeholder="Email Id"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Phone Number"
            placeholder="Phone Number"
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Gender"
            placeholder="Select Gender"
            options={GENDER}
          />
          <InputText type={'date'} labelTitle={"Date of Birth"} />
          <TextAreaInput
            labelTitle="About"
            placeholder="About"
            containerStyle={"col-span-2"}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">ADDRESS DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText labelTitle="Street" placeholder="Street" updateFormValue={updateFormValue} />
          <InputText labelTitle="City" placeholder="City" updateFormValue={updateFormValue} />
          <InputText labelTitle="State" placeholder="State" updateFormValue={updateFormValue} />
          <InputText
            labelTitle="Postal Code"
            placeholder="Postal Code"
            updateFormValue={updateFormValue}
          />
          <InputText labelTitle="Country" placeholder="Country" updateFormValue={updateFormValue} />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">EMERGENCY CONTACT DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText labelTitle="Name" placeholder="Name" updateFormValue={updateFormValue} />
          <InputText labelTitle="Relation" placeholder="Relation" updateFormValue={updateFormValue} />
          <InputText labelTitle="Contact Number" placeholder="Contact Number" updateFormValue={updateFormValue} />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default PersonalPage;
