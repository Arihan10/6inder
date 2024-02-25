import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }
})