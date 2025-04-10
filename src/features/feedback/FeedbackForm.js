import React, { useEffect, useState ,useRef} from "react";
import { useDispatch } from 'react-redux';
import { showNotification } from "../../redux/headerSlice";
import GiveFeedbackInputs from "../../components/FormsInputs/GiveFeedbackImputs";
import UniversalModal from "../../components/modals/UniversalModal";
import { createFeedback } from "../../services/feedback.service";
import { validateFeedbackData } from "../../validations/FeedbackValidation";



const INITIAL_FEEDBACK = {

  overallExperience: "",
  workEnvironment: "",
  supportFromSeniors: "",
  trainingAndDevelopment: "",
  additionalComments: "",
  
};

function FeedbackForm({driveId,companyName}) {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);

  useEffect(()=>{
    setFeedback(prev=>({...prev,driveId,companyName}));
    console.log(driveId,"driveid")

  },[driveId,companyName])

  const updateFeedback = async () => {
    console.log(feedback)

    if (!validateFeedbackData(feedback)) {
      dispatch(showNotification({ message: "Please fill in all required fields", status: 0 }));
      return;
    }

   try {
    
        const response = await createFeedback(feedback); // Call the API
        if (response.status) {
            dispatch(showNotification({ message: "Feedback Added", status: 1 }));
            setFeedback(INITIAL_FEEDBACK)
            document.getElementById("FeedbackFormModal").close();
            // formRef.current.reset();
        } else {
            dispatch(showNotification({ message: response.message, status: 0 }));
        }
    } catch (error) {
        dispatch(showNotification({ message: "Failed to add feedback", status: 0 }));
    }
    
};

  // Handle Form Value Updates
  const updateFormValue = ({name, value}) => {
   
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  // 

  return (
    <UniversalModal id="FeedbackFormModal" title="Give Feedback">
      <GiveFeedbackInputs
        feedback={feedback}
        updateFormValue={updateFormValue}
      />
      <div className="mt-4">
        <button
          onClick={updateFeedback}
          className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 text-sm self-end mt-4 md:mt-0 float-right"
        >
          Submit Feedback
        </button>
      </div>
    </UniversalModal>
  );
}

export default FeedbackForm;
