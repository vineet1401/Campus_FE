import axios from "axios";

export const storeCodingProgress = async (data) => {
    try {
        const response = await axios.post("/api/codingProgress/create", data)
        // console.log("✅ API response:", response.data);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}


export const getCodingProgress = async () => {
    try {
        const response = await axios.get("/api/codingProgress/get")
        return { data: response.data, message: response.message };
        // return response.data
    }
    catch (error) {
        console.log(error);
    }
}