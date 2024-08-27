import axios from 'axios';

// Create a new notification
export const createNotification = async (notificationData) => {
  try {
    const response = await axios.post('/api/notice/create-notification', notificationData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Create notification failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : 'Failed to create notification',
      data: null,
    };
  }
};

// Get all notifications
export const getAllNotifications = async () => {
  try {
    const response = await axios.get('/api/notification/fetch-all-notifications');
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch all notifications failed:', error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : 'Failed to fetch notifications',
      data: null,
    };
  }
};

// Get a specific notification by ID
export const getNotificationById = async (id) => {
  try {
    const response = await axios.get(`/api/notification/fetch-one-notification/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Fetch notification by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : 'Failed to fetch notification',
      data: null,
    };
  }
};

// Update a notification by ID
export const updateNotificationById = async (id, notificationData) => {
  try {
    const response = await axios.put(`/api/notification/update-notification/${id}`, notificationData);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Update notification by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : 'Failed to update notification',
      data: null,
    };
  }
};

// Delete a notification by ID
export const deleteNotificationById = async (id) => {
  try {
    const response = await axios.delete(`/api/notification/delete-notification/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error(`Delete notification by ID failed: ${id}`, error);
    return {
      status: error.response ? error.response.data.status : false,
      message: error.response
        ? error.response.data.message
        : 'Failed to delete notification',
      data: null,
    };
  }
};
