export const validateFeedbackData = (feedback) => {
    // Check if all fields are filled in and no field is empty
    if (!feedback.overallExperience.trim()) return false;
    if (!feedback.workEnvironment.trim()) return false;
    if (!feedback.supportFromSeniors.trim()) return false;
    if (!feedback.trainingAndDevelopment.trim()) return false;
    if (!feedback.additionalComments.trim()) return false;
    return true;
  };
  