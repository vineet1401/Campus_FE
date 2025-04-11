import axios from "axios";

export const getAllCoding = async () => {
    try {
        const response = await axios.get("/api/coding/get")
        return { data: response.data, message: response.message };
    }
    catch (e) {
        console.log(e);
    }
}