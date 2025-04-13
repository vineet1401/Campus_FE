import axios from "axios";

// Create a new feedback record
export const createFeedback = async (feedbackData) => {
  try {
    const response = await axios.post("/api/feedback/create-feedback", feedbackData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Create feedback failed:", error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to create feedback",
      data: null,
    };
  }
};


// Get all feedback records


export const getCompanyFeedback = async (driveId) => {
  try {
    // Make GET request with  as a query parameter
    const response = await axios.get('/api/feedback/fetch-all-feedback/'+driveId);

    // Return the data with status and message from the response
    return {
      status: response.status, // Adjusted to use HTTP status code from the response
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Fetch all feedback records failed:", error);

    // Handle error response if available
    return {
      status: error.response ? error.response.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to fetch feedback records",
      data: null,
    };
  }
};




// Get a specific feedback record by ID
export const getFeedbackById = async (id) => {
    try {
      const response = await axios.get(`/api/feedback/fetch-one-feedback/${id}`);
      return {
        status: response.data.status,
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.error(`Fetch feedback record by ID failed: ${id}`, error);
      return {
        status: error.response ? error.response.data.status : false,
        message: error.response
          ? error.response.data.message
          : "Failed to fetch feedback record",
        data: null,
      };
    }
  };



  // Update a feedback record by ID
export const updateFeedbackById = async (id, feedbackData) => {
    try {
      const response = await axios.put(`/api/feedback/update-feedback/${id}`, feedbackData);
      return {
        status: response.data.status,
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.error(`Update feedback record by ID failed: ${id}`, error);
      return {
        status: error.response ? error.response.data.status : false,
        message: error.response
          ? error.response.data.message
          : "Failed to update feedback record",
        data: null,
      };
    }
  };


// Delete a feedback record by ID
export const deleteFeedbackById = async (id) => {
    try {
      const response = await axios.delete(`/api/feedback/delete-feedback/${id}`);
      return {
        status: response.data.status,
        message: response.data.message,
        data: response.data.data,
      };
    } catch (error) {
      console.error(`Delete feedback record by ID failed: ${id}`, error);
      return {
        status: error.response ? error.response.data.status : false,
        message: error.response
          ? error.response.data.message
          : "Failed to delete feedback record",
        data: null,
      };
    }
  };
