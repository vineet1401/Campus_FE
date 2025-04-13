// services/resumeService.js
import axios from "axios";

export const uploadResume = async (resumeFormData) => {
    try {
        const response = await axios.post("/api/resume/create", resumeFormData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return { data: response.data, message: "Resume uploaded successfully" };
    } catch (e) {
        console.log(e);
        return { error: true, message: "Failed to upload resume" };
    }
};
