// import React from "react";
// import { useDispatch } from "react-redux";
// import { showNotification } from "../../redux/headerSlice"; // Adjust path as needed
// import { useState } from "react";
// import GiveFeedbackImputs from "../../components/FormsInputs/GiveFeedbackImputs";
// import UniversalModal from "../../components/modals/UniversalModal";

// function FeedbackForm() {
//   const dispatch = useDispatch();
//   const [feedback, setFeedback] = useState({
//     studentName: "",
//     dateOfJoining: "",
//     overallExperience: "",
//     workEnvironment: "",
//     supportFromSeniors: "",
//     trainingAndDevelopment: "",
//     additionalComments: "",
//   });

//   const updateFormValue = (e) => {
//     const { name, value } = e.target;
//     setFeedback((prev) => ({ ...prev, [name]: value }));
//   };

//   const submitFeedback = () => {
//     dispatch(
//       showNotification({
//         message: "Feedback Submitted Successfully!",
//         status: 1,
//       })
//     );
//   };

//   return (
//     <UniversalModal id="FeedbackFormModal" title="Give Feedback">
//       <GiveFeedbackImputs
//         feedback={feedback}
//         updateFormValue={updateFormValue}
//       />
//       <div className="mt-4">
//         <button
//           onClick={submitFeedback}
//           className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm self-end mt-4 md:mt-0 float-right"
//         >
//           Submit Feedback
//         </button>
//       </div>
//     </UniversalModal>
//   );
// }

// export default FeedbackForm;




import React, { useState } from "react";
import GiveFeedbackInputs from "../../components/FormsInputs/GiveFeedbackImputs";
import UniversalModal from "../../components/modals/UniversalModal";
import { createFeedback } from "../../services/feedback.service";

const INITIAL_FEEDBACK = {
  studentName: "",
  dateOfJoining: "",
  overallExperience: "",
  workEnvironment: "",
  supportFromSeniors: "",
  trainingAndDevelopment: "",
  additionalComments: "",
};

function FeedbackPage() {
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);

  // Handle Form Value Updates
  const updateFormValue = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Feedback
  const submitFeedback = async () => {
    console.log("Feedback Data:", feedback);
    try {
      const response = await createFeedback(feedback);
      if (response.status) {
        alert("Feedback Submitted Successfully!");
        setFeedback(INITIAL_FEEDBACK);
        // Optionally close the modal here if needed
        // Use a mechanism to close the modal here if applicable
      } else {
        alert("Failed to submit feedback: " + response.message);
      }
    } catch (error) {
      alert("Submission failed: " + error.message);
    }
  };

  return (
    <UniversalModal id="FeedbackFormModal" title="Give Feedback">
      <GiveFeedbackInputs
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

export default FeedbackPage;
