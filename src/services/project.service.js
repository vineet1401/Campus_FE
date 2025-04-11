import axios from 'axios';

// Create a new project
export const createProject = async (projectData) => {
  try {
    const response = await axios.post('/api/project/create-project', projectData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Create Project failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to create project',
      data: null,
    };
  }
};

// Get all projects for a user
export const getAllProjects = async () => {
  try {
    const response = await axios.get(`/api/project/fetch-all-project`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch projects failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to fetch projects',
      data: null,
    };
  }
};

// Get a specific project by ID
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`/api/project/fetch-one-project/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch project by ID failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to fetch project by ID',
      data: null,
    };
  }
};

// Update an project by ID
export const updateProjectById = async (id, projectData) => {
  try {
    const response = await axios.put(`/api/project/update-project/${id}`, projectData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Update project failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to update project',
      data: null,
    };
  }
};

// Delete an project by ID
export const deleteProjectById = async (id) => {
  try {
    const response = await axios.delete(`/api/project/delete-project/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error('Delete project failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response ? error.response.data.message : 'Failed to delete project',
    };
  }
};
