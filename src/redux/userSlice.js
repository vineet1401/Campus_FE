import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "userDataSlice",
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
    removeUserData: (state, action) => {
      return {};
    },
  },
});

export const {setUserData, removeUserData} = UserDataSlice.actions;

export default UserDataSlice.reducer;
