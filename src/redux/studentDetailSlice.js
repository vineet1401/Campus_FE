import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PERSONAL = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  about: "",
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  profilePicture: "",
  emergencyContact: {
    name: "",
    relationship: "",
    phoneNumber: "",
  },
  zprn: "",
  department: "",
  year: "",
};

const studentDetailSlice = createSlice({
  name: "studentDetail",
  initialState: {
    personal: INITIAL_PERSONAL,
    education: [],
    project: [],
    experience: [],
  },
  reducers: {
    // Personal Data Reducers
    setPersonalData: (state, action) => {
      state.personal = action.payload;
    },
    updatePersonalData: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
    },
    clearPersonalData: (state) => {
      state.personal = {};
    },

    // Education Reducers
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    updateEducation: (state, action) => {
      const { id, data } = action.payload;
      const index = state.education.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.education[index] = { ...state.education[index], ...data };
      }
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (item) => item._id !== action.payload
      );
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },

    // Project Reducers
    addProject: (state, action) => {
      state.project.push(action.payload);
    },
    updateProject: (state, action) => {
      const { id, data } = action.payload;
      const index = state.project.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.project[index] = { ...state.project[index], ...data };
      }
    },
    removeProject: (state, action) => {
      state.project = state.project.filter(
        (item) => item._id !== action.payload
      );
    },
    setProject: (state, action) => {
      state.project = action.payload;
    },

    // Experience Reducers
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateExperience: (state, action) => {
      const { id, data } = action.payload;
      const index = state.experience.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.experience[index] = { ...state.experience[index], ...data };
      }
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter(
        (item) => item._id !== action.payload
      );
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
  },
});

export const {
  setPersonalData,
  updatePersonalData,
  clearPersonalData,
  addEducation,
  updateEducation,
  removeEducation,
  addProject,
  updateProject,
  removeProject,
  addExperience,
  updateExperience,
  removeExperience,
  setEducation,
  setExperience,
  setProject
} = studentDetailSlice.actions;

export default studentDetailSlice.reducer;
