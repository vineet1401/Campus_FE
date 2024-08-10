import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../src/components/Cards/TitleCard";
import { showNotification } from "../../../src/redux/headerSlice";
import InputText from "../../../src/components/Input/InputText";
import TextAreaInput from "../../../src/components/Input/TextAreaInput";
import SelectBox from "../../../src/components/Input/SelectBox";
import DateInput from "../../../src/components/Input/DatePicker";

const RATINGS = [
  { name: "1 - Poor", value: "1" },
  { name: "2 - Fair", value: "2" },
  { name: "3 - Good", value: "3" },
  { name: "4 - Very Good", value: "4" },
  { name: "5 - Excellent", value: "5" },
];

function FeedbackForm() {
  const dispatch = useDispatch();

  // Call API to submit feedback
  const submitFeedback = () => {
    dispatch(showNotification({ message: "Feedback Submitted", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType, value);
  };

  return (
    <>
      <TitleCard title="Company Feedback Form" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputText
            labelTitle="Student Name"
            defaultValue=""
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Company Name"
            defaultValue=""
            updateFormValue={updateFormValue}
          />
          <DateInput labelTitle="Date of Joining" />
          <SelectBox
            labelTitle="Overall Experience"
            defaultValue="Select Rating"
            placeholder="Select Rating"
            options={RATINGS}
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Work Environment"
            defaultValue="Select Rating"
            placeholder="Select Rating"
            options={RATINGS}
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Support from Seniors"
            defaultValue="Select Rating"
            placeholder="Select Rating"
            options={RATINGS}
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Training & Development"
            defaultValue="Select Rating"
            placeholder="Select Rating"
            options={RATINGS}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Suggestions for Improvement"
            containerStyle={"col-span-2"}
            defaultValue=""
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="Additional Comments"
            containerStyle={"col-span-2"}
            defaultValue=""
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => submitFeedback()}
          >
            Submit Feedback
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default FeedbackForm;
