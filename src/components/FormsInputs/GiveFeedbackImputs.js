import React from 'react';
import InputText from '../Input/InputText';
import SelectBox from '../Input/SelectBox';
import TextAreaInput from '../Input/TextAreaInput';

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
  

      {/* Overall Experience and Work Environment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox
          labelTitle="Overall Experience"
          name="overallExperience"
          defaultValue={feedback?.overallExperience}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Overall Experience"
        />
        <SelectBox
          labelTitle="Work Environment"
          name="workEnvironment"
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
          defaultValue={feedback?.supportFromSeniors}
          updateFormValue={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Support from Seniors"
        />
        <SelectBox
          labelTitle="Training & Development"
          name="trainingAndDevelopment"
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
        defaultValue={feedback?.additional}
        updateFormValue={updateFormValue}
        containerStyle="w-full"
        placeholder="Additional Comments"
      />
    </div>
  );
};

export default GiveFeedbackInputs;
