import React from 'react'
import TextAreaInput from '../Input/TextAreaInput'
import SelectBox from '../Input/SelectBox'
import InputText from '../Input/InputText'

const RATINGS = [
    { name: "1 - Poor", value: "1" },
    { name: "2 - Fair", value: "2" },
    { name: "3 - Good", value: "3" },
    { name: "4 - Very Good", value: "4" },
    { name: "5 - Excellent", value: "5" },
  ];

const GiveFeedbackImputs = ({feedback, updateFormValue}) => {
  return (
    <div className="grid grid-cols-1 gap-4">
    {/* Form Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputText
        labelTitle="Student Name"
        name="studentName"
        type="text"
        value={feedback.studentName}
        onChange={updateFormValue}
        containerStyle="w-full"
        placeholder="Student Name"
        
      />
      <InputText
        type="date"
        labelTitle="Date of Joining"
        name="dateOfJoining"
        value={feedback.dateOfJoining}
        onChange={updateFormValue}
        containerStyle="w-full"
        placeholder="Date of joining"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SelectBox
        labelTitle="Overall Experience"
        name="overallExperience"
        value={feedback.overallExperience}
        onChange={updateFormValue}
        options={RATINGS}
        containerStyle="w-full"
        placeholder="Overall Experience"
      />
      <SelectBox
        labelTitle="Work Environment"
        placeholder="Work Environment"
        name="workEnvironment"
        value={feedback.workEnvironment}
        onChange={updateFormValue}
        options={RATINGS}
        containerStyle="w-full"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SelectBox
        labelTitle="Support from Seniors"
        placeholder="Support from Seniors"
        name="supportFromSeniors"
        value={feedback.supportFromSeniors}
        onChange={updateFormValue}
        options={RATINGS}
        containerStyle="w-full"
      />
      <SelectBox
        labelTitle="Training & Development"
        placeholder="Training & Development"
        name="trainingAndDevelopment"
        value={feedback.trainingAndDevelopment}
        onChange={updateFormValue}
        options={RATINGS}
        containerStyle="w-full"
      />
      <TextAreaInput
        labelTitle="Additional Comments"
        placeholder="Additional Comments"
        name="additionalComments"
        value={feedback.additionalComments}
        onChange={updateFormValue}
        containerStyle="flex-1"
      />
    </div>
    {/* Text Area and Submit Button in One Line */}

  </div>
  )
}

export default GiveFeedbackImputs