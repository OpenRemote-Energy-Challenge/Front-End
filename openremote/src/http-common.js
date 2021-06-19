import axios from "axios";

export default axios.create({
    baseURL: "http://51.75.73.83:9090/",
    headers: {
        "Content-type": "application/json"
    }
});