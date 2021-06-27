import axios from "axios";

const API_URL = "http://51.75.73.83:9090/user/login";

class AuthService {
    login(fullName, password) {
        return axios
            .post(API_URL, {
                fullName,
                password
            })
            .then(res => {
                if (res.data.userId) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }

                return res.data;
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();