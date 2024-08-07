import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../../redux/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import SelectBox from "../../../components/Input/SelectBox";
import DateInput from "../../../components/Input/DatePicker";

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

function PersonalDetail() {
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
            defaultValue="Alex"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Middle Name"
            defaultValue="Alex"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Last Name"
            defaultValue="Alex"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            defaultValue="alex@dashwind.com"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Phone Number"
            defaultValue="alex@dashwind.com"
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Gender"
            defaultValue="Select Gender"
            placeholder="Select Gender"
            options={GENDER}
          />
          <DateInput labelTitle={"Date of Birth"} />
          <TextAreaInput
            labelTitle="About"
            containerStyle={"col-span-2"}
            defaultValue="Doing what I love, part time traveller"
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">ADDRESS DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText labelTitle="Street" updateFormValue={updateFormValue} />
          <InputText labelTitle="City" updateFormValue={updateFormValue} />
          <InputText labelTitle="State" updateFormValue={updateFormValue} />
          <InputText
            labelTitle="Postal Code"
            updateFormValue={updateFormValue}
          />
          <InputText labelTitle="Country" updateFormValue={updateFormValue} />
        </div>

        <div className="divider"></div>

        <h4 className="font-semibold">EMERGENCY CONTACT DETAILS</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText labelTitle="Name" updateFormValue={updateFormValue} />
          <InputText labelTitle="Relation" updateFormValue={updateFormValue} />
          <InputText labelTitle="Contact Number" updateFormValue={updateFormValue} />
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

export default PersonalDetail;
