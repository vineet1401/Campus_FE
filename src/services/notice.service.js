import axios from 'axios';

export const createNotification = async (data) => {
  try {
    const response = await axios.post(`/api/notice/create-notice`, data);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Create notification error:', error);
    return {
      status: false,
      message: error.response?.data?.message || 'Error creating notification',
      data: null,
    };
  }
};

export const getAllNotifications = async () => {
  try {
    const response = await axios.get(`/api/notice/get-all-notice`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch notifications error:', error);
    return {
      status: false,
      message: error.response?.data?.message || 'Error fetching notifications',
      data: null,
    };
  }
};

export const getNotificationById = async (id) => {
  try {
    const response = await axios.get(`/api/notice/fetch-one-notice/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Fetch single notification error:', error);
    return {
      status: false,
      message: error.response?.data?.message || 'Error fetching notification',
      data: null,
    };
  }
};

export const updateNotification = async (id, data) => {
  try {
    const response = await axios.put(`/api/notice/update-notice/${id}`, data);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Update notification error:', error);
    return {
      status: false,
      message: error.response?.data?.message || 'Error updating notification',
      data: null,
    };
  }
};

export const deleteNotification = async (id) => {
  try {
    const response = await axios.delete(`/api/notice/delete-notice/${id}`);
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    console.error('Delete notification error:', error);
    return {
      status: false,
      message: error.response?.data?.message || 'Error deleting notification',
      data: null,
    };
  }
};