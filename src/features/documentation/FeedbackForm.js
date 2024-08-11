import React from 'react';
import InputText from "../../../src/components/Input/InputText";
import TextAreaInput from "../../../src/components/Input/TextAreaInput";
import SelectBox from "../../../src/components/Input/SelectBox";
import { useDispatch } from 'react-redux';
import { showNotification } from '../../redux/headerSlice'; // Adjust path as needed

const RATINGS = [
  { name: "1 - Poor", value: "1" },
  { name: "2 - Fair", value: "2" },
  { name: "3 - Good", value: "3" },
  { name: "4 - Very Good", value: "4" },
  { name: "5 - Excellent", value: "5" },
];

function FeedbackForm() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = React.useState({
    studentName: '',
    dateOfJoining: '',
    overallExperience: '',
    workEnvironment: '',
    supportFromSeniors: '',
    trainingAndDevelopment: '',
    additionalComments: '',
  });

  const updateFormValue = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const submitFeedback = () => {
    dispatch(showNotification({ message: "Feedback Submitted Successfully!", status: 1 }));
    
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          labelTitle="Student Name"
          name="studentName"
          value={formValues.studentName}
          onChange={updateFormValue}
          containerStyle="w-full"
          placeholder="Student Name"
          
        />
        <InputText
          type="date"
          labelTitle="Date of Joining"
          name="dateOfJoining"
          value={formValues.dateOfJoining}
          onChange={updateFormValue}
          containerStyle="w-full"
          placeholder="Date of joining"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox
          labelTitle="Overall Experience"
          name="overallExperience"
          value={formValues.overallExperience}
          onChange={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
          placeholder="Overall Experience"
        />
        <SelectBox
          labelTitle="Work Environment"
          placeholder="Work Environment"
          name="workEnvironment"
          value={formValues.workEnvironment}
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
          value={formValues.supportFromSeniors}
          onChange={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
        />
        <SelectBox
          labelTitle="Training & Development"
          placeholder="Training & Development"
          name="trainingAndDevelopment"
          value={formValues.trainingAndDevelopment}
          onChange={updateFormValue}
          options={RATINGS}
          containerStyle="w-full"
        />
      </div>
      {/* Text Area and Submit Button in One Line */}
      <div className="flex flex-col md:flex-row gap-4">
        <TextAreaInput
          labelTitle="Additional Comments"
          placeholder="Additional Comments"
          name="additionalComments"
          value={formValues.additionalComments}
          onChange={updateFormValue}
          containerStyle="flex-1"
        />
        <button
          onClick={submitFeedback}
          className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm self-end mt-4 md:mt-0"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
