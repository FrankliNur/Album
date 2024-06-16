import axios from "axios";

export const postLogin = (credentials) => {
    return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000/login", credentials)
            .then((res) => {
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
    });
}
export const postRegister = (credentials) => {
    return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000/login", credentials)
            .then((res) => {
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
    });
}