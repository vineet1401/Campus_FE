import axios from "axios";

// Create a new drive
export const createDrive = async (driveData) => {
  try {
    const response = await axios.post("/api/drive/create-drive", driveData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Create drive failed:", error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : "Failed to create drive",
      data: null,
    };
  }
};


export const getAllDrives = async () => {
 try {
   const response = await axios.get("/api/drive/fetch-all-drives");
   return {
     status: response.data.status,
     message: response.data.message,
     data: response.data.data,
   };
 } catch (error) {
   console.error("Fetch all drives failed:", error);
   return {
     status: error.response ? error.response.data.status : false,
     message: error.response
       ? error.response.data.message
       : "Failed to fetch drives",
     data: null,
   };
 }
};

// Get a specific drive by ID
export const getDriveById = async (id) => {
 try {
   const response = await axios.get(`/api/drive/fetch-one-drive/${id}`);
   return {
     status: response.data.status,
     message: response.data.message,
     data: response.data.data,
   };
 } catch (error) {
   console.error(`Fetch drive record by ID failed: ${id}`, error);
   return {
     status: error.response ? error.response.data.status : false,
     message: error.response
       ? error.response.data.message
       : "Failed to fetch drive record",
     data: null,
   };
 }
};

// Update a drive by ID
export const updateDriveById = async (id, driveData) => {
 try {
   const response = await axios.put(`/api/drive/update-drive/${id}`, driveData);
   return {
     status: response.data.status,
     message: response.data.message,
     data: response.data.data,
   };
 } catch (error) {
   console.error(`Update drive record by ID failed: ${id}`, error);
   return {
     status: error.response ? error.response.data.status : false,
     message: error.response
       ? error.response.data.message
       : "Failed to update drive record",
     data: null,
   };
 }
};

// Delete a drive by ID
export const deleteDriveById = async (id) => {
 try {
   const response = await axios.delete(`/api/drive/delete-drive/${id}`);
   return {
     status: response.data.status,
     message: response.data.message,
     data: response.data.data,
   };
 } catch (error) {
   console.error(`Delete drive record by ID failed: ${id}`, error);
   return {
     status: error.response ? error.response.data.status : false,
     message: error.response
       ? error.response.data.message
       : "Failed to delete drive record",
     data: null,
   };
 }
};
