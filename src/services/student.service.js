import axios from 'axios';

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post('/api/student/create-student', studentData);
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
        };
    } catch (error) {
        console.error('Create student failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Failed to create student',
            data: null,
        };
    }
};

export const getStudentById = async () => {
    try {
        const response = await axios.get('/api/student/fetch-student');
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
        };
    } catch (error) {
        console.error('Fetch student by ID failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Failed to fetch student',
            data: null,
        };
    }
};




export const getAllStudents = async () => {
    try {
        const response = await axios.get('/api/student/fetch-all-student');
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
        };
    } catch (error) {
        console.error('Fetch all students failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Failed to fetch students',
            data: null,
        };
    }
};

export const updateStudentById = async (updatedData) => {
    try {
        const response = await axios.put(`/api/student/update-student`, updatedData);
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
        };
    } catch (error) {
        console.error('Update student by ID failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Failed to update student',
            data: null,
        };
    }
};

export const deleteStudentById = async (studentId) => {
    try {
        const response = await axios.delete(`/api/student/delete-student/${studentId}`);
        return {
            status: response.data.status,
            message: response.data.message,
            data: null, // No data is expected on successful deletion
        };
    } catch (error) {
        console.error('Delete student by ID failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Failed to delete student',
            data: null,
        };
    }
};

