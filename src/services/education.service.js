import axios from "axios";

// Create a new education record
export const createEducation = async (educationData) => {
  try {
    const response = await axios.post(
      "/api/education/create-education",
      educationData
    );
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Create education failed:", error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to create education",
      data: null,
    };
  }
};

// Get all education records
export const getAllEducation = async () => {
  try {
    const response = await axios.get("/api/education/fetch-all-education");
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Fetch all education records failed:", error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to fetch education records",
      data: null,
    };
  }
};

// Get a specific education record by ID
export const getEducationById = async (id) => {
  try {
    const response = await axios.get(
      `/api/education/fetch-one-education/${id}`
    );
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Fetch education record by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to fetch education record",
      data: null,
    };
  }
};

// Update an education record by ID
export const updateEducationById = async (id, educationData) => {
  try {
    const response = await axios.put(
      `/api/education/update-education/${id}`,
      educationData
    );
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Update education record by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to update education record",
      data: null,
    };
  }
};

// Delete an education record by ID
export const deleteEducationById = async (id) => {
  try {
    const response = await axios.delete(
      `/api/education/delete-education/${id}`
    );
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Delete education record by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to delete education record",
      data: null,
    };
  }
};
