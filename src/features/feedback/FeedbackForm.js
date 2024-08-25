import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice"; // Adjust path as needed
import { useState } from "react";
import GiveFeedbackImputs from "../../components/FormsInputs/GiveFeedbackImputs";
import UniversalModal from "../../components/modals/UniversalModal";

function FeedbackForm() {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    studentName: "",
    dateOfJoining: "",
    overallExperience: "",
    workEnvironment: "",
    supportFromSeniors: "",
    trainingAndDevelopment: "",
    additionalComments: "",
  });

  const updateFormValue = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const submitFeedback = () => {
    dispatch(
      showNotification({
        message: "Feedback Submitted Successfully!",
        status: 1,
      })
    );
  };

  return (
    <UniversalModal id="FeedbackFormModal" title="Give Feedback">
      <GiveFeedbackImputs
        feedback={feedback}
        updateFormValue={updateFormValue}
      />
      <div className="mt-4">
        <button
          onClick={submitFeedback}
          className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm self-end mt-4 md:mt-0 float-right"
        >
          Submit Feedback
        </button>
      </div>
    </UniversalModal>
  );
}

export default FeedbackForm;
