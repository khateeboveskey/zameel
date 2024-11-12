import { deviceName } from "expo-device";

import { useAsyncStorage, useRequest } from "@/hooks";
import axios from "@/plugins/axios";
import { UserLoginPayload } from "@/types/payload";

/**
 * Provides an authentication hook that handles user login functionality.
 *
 * @returns An object with the following properties:
 *   - `isLoading`: A boolean indicating whether a login request is in progress.
 *   - `login`: An asynchronous function that takes an email and password, and logs the user in.
 */
export function useAuth() {
  const { setItem } = useAsyncStorage();
  const { post, isLoading } = useRequest();

  /**
   * Logs the user in with the provided email and password.
   *
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves when the login is successful, or rejects with an error if the login fails.
   */
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
