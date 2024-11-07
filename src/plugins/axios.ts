import axios from "axios";

// todo: get token from local storage
const token = "1|H4VPZgfdms2KXzZEaIN7an643reQw448KSVdTCOk2696e056";

const instance = axios.create({
  baseURL: "http://192.168.1.101:8000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  }
});

export default instance;
