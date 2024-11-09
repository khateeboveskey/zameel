import { deviceName } from "expo-device";

import { useAsyncStorage, useRequest } from "@/hooks";
import axios from "@/plugins/axios";
import { UserLoginPayload } from "@/types/payload";

export function useAuth() {
  const { setItem } = useAsyncStorage();
  const { post, isLoading } = useRequest();

  const login = async (email: string, password: string) => {
    const loginPayload: UserLoginPayload = {
      data: {
        attributes: {
          email,
          password
        }
      },
      meta: {
        deviceName
      }
    };

    try {
      const response = await post("/login", loginPayload);
      if (response && response.data) {
        const token = response.data.token;
        await setItem("token", token);
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        console.log("Logged in: " + token);
        return response;
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        return error.response;
      }
    }
  };

  return { isLoading, login };
}
