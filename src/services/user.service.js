import axios from 'axios';


export const getStudentCompleteProfileByUserId = async (userId) => {
  try {
    const response = await axios.get(`/api/user/profile/${userId}`);

    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data || null,
    };
  } catch (error) {
    console.error(`Error fetching profile for user ID: ${userId}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to fetch student profile",
      data: null,
    };
  }
};
