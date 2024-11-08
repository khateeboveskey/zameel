import axios from "axios";

import { useAsyncStorage } from "@/hooks";

const { getItem } = useAsyncStorage();

const token = getItem("token") ?? "";

const instance = axios.create({
  baseURL: "http://192.168.1.101:8000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  }
});

export default instance;
