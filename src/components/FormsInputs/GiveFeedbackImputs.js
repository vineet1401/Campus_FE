import React from 'react';
import TextAreaInput from '../Input/TextAreaInput';
import SelectBox from '../Input/SelectBox';
import InputText from '../Input/InputText';

const RATINGS = [
  { name: "1 - Poor", value: "1" },
  { name: "2 - Fair", value: "2" },
  { name: "3 - Good", value: "3" },
  { name: "4 - Very Good", value: "4" },
  { name: "5 - Excellent", value: "5" },
];

const GiveFeedbackInputs = ({ feedback, updateFormValue }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Student Name and Date of Joining */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          labelTitle="Student Name"
          name="studentName"
          defaultValue={feedback?.studentName}
          updateFormValue={updateFormValue}
          containerStyle="w-full"
          placeholder="Student Name"
        />
        <InputText
          type="date"
          labelTitle="Date of Joining"
          name="dateOfJoining"
          defaultValue={feedback?.dateOfJoining}
          updateFormValue={updateFormValue}
          containerStyle="w-full"
        />
      </div>

      {/* Overall Experience and Work Environment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox
          labelTitle="Overall Experience"
          name="overallExperience"
          // value={feedback?.overallExperience}
          defaultValue={feedback?.overallExperience}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Overall Experience"
        />
        <SelectBox
          labelTitle="Work Environment"
          name="workEnvironment"
          // value={feedback?.workEnvironment}
          defaultValue={feedback?.workEnvironment}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Work Environment"
        />
      </div>

      {/* Support from Seniors and Training & Development */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox
          labelTitle="Support from Seniors"
          name="supportFromSeniors"
          // value={feedback?.supportFromSeniors}
          defaultValue={feedback?.supportFromSeniors}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Support from Seniors"
        />
        <SelectBox
          labelTitle="Training & Development"
          name="trainingAndDevelopment"
          // value={feedback?.trainingAndDevelopment}
          defaultValue={feedback?.trainingAndDevelopment}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Training & Development"
        />
      </div>

      {/* Additional Comments */}
      <TextAreaInput
        labelTitle="Additional Comments"
        name="additionalComments"
        // value={feedback?.additionalComments}
        defaultValue={feedback?.additionalComments}
        updateFormValue={updateFormValue}
        containerStyle="w-full"
        placeholder="Additional Comments"
      />
    </div>
  );
};

export default GiveFeedbackInputs;
