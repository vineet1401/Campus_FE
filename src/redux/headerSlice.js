import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    pageTitle: "Home", // current page title state management
    noOfNotifications: 20, // no of unread notifications
    newNotificationMessage: "", // message of notification to be shown
    newNotificationStatus: 1, // to check the notification type -  success/ error/ info
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title;
    },

    removeNotificationMessage: (state, action) => {
      state.newNotificationMessage = "";
    },

    showNotification: (state, action) => {
      state.newNotificationMessage = action.payload.message;
      state.newNotificationStatus = action.payload.status;
      if (action.payload.status === 1) toast.success(action.payload.message);
      if (action.payload.status === 0) toast.error(action.payload.message);
    },
  },
});

export const { setPageTitle, removeNotificationMessage, showNotification } =
  headerSlice.actions;

export default headerSlice.reducer;
