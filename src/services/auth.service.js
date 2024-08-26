import axios from 'axios';

export const adminLogin = async (email, password) => {
    try {
        const response = await axios.post('/api/auth/login-admin', {
            email,
            password,
        });

        // Assuming the response contains status, message, and data
        console.log("admin login", response.data)
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,  // This could be token and user data
        };
    } catch (error) {
        console.error('Admin login failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Login Failed',
            data: null,
        };
    }
};


export const studentLogin = async (zprn, password) => {
    try {
        const response = await axios.post('/api/auth/login-user', {
            zprn,
            password,
        });

        // Assuming the response contains status, message, and data
        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,  // This could be token and user data
        };
    } catch (error) {
        console.error('Student login failed:', error);
        return {
            status: error.response ? error.response.data.status : false,
            message: error.response ? error.response.data.message : 'Login Failed',
            data: null,
        };
    }
};
