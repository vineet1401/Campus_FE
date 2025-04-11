import axios from "axios";

export const getAllAptitude = async () => {
    try {
        const response = await axios.get("/api/aptitude/get")
        return { data: response.data, message: response.message };
    }
    catch (e) {
        console.log(e);
    }
}