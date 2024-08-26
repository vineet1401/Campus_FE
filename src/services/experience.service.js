import axios from 'axios';

// Create a new experience
export const createExperience = async (experienceData) => {
  try {
    const response = await axios.post('/api/experience/create-experience', experienceData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Create experience failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to create experience',
      data: null,
    };
  }
};

// Get all experiences for a user
export const getAllExperiences = async () => {
  try {
    const response = await axios.get(`/api/experience/fetch-all-experience`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch experiences failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to fetch experiences',
      data: null,
    };
  }
};

// Get a specific experience by ID
export const getExperienceById = async (id) => {
  try {
    const response = await axios.get(`/api/experience/fetch-one-experience/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch experience by ID failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to fetch experience by ID',
      data: null,
    };
  }
};

// Update an experience by ID
export const updateExperienceById = async (id, experienceData) => {
  try {
    const response = await axios.put(`/api/experience/update-experience/${id}`, experienceData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Update experience failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to update experience',
      data: null,
    };
  }
};

// Delete an experience by ID
export const deleteExperienceById = async (id) => {
  try {
    const response = await axios.delete(`/api/experience/delete-experience/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error('Delete experience failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to delete experience',
    };
  }
};
