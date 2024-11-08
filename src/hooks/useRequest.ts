import { useState } from "react";

import axios from "@/plugins/axios";
import { PayloadData } from "@/types/payload";

/**
 * A custom React hook that provides a set of functions for making HTTP requests.
 *
 * @returns An object containing the following properties:
 * - `isLoading`: A boolean indicating whether a request is currently in progress.
 * - `get`: An asynchronous function that sends a GET request to the specified endpoint and returns the response data.
 * - `post`: An asynchronous function that sends a POST request to the specified endpoint with the provided data and returns the response.
 * - `delete`: An asynchronous function that sends a DELETE request to the specified endpoint with the provided ID and returns the response data.
 */
export function useRequest() {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Sends a GET request to the specified endpoint and returns the response data.
   *
   * @param endpoint - The URL endpoint to send the GET request to.
   * @returns The response data, or `null` if an error occurs.
   */
  const get = async (endpoint: string) => {
    setIsLoading(true);
    try {
      const res = await axios.get(endpoint);
      return res.data.data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Sends a POST request to the specified endpoint with the provided data and returns the response.
   *
   * @param endpoint - The URL endpoint to send the POST request to.
   * @param data - The data to be sent in the POST request.
   * @returns The response object, or `null` if an error occurs.
   */
  const post = async (endpoint: string, data: PayloadData) => {
    setIsLoading(true);
    try {
      const res = await axios.post(endpoint, JSON.stringify(data));
      return res;
    } catch (error) {
      console.error(`Error in ${endpoint} POST: ${error}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Sends a DELETE request to the specified endpoint with the provided ID and returns the response data.
   *
   * @param endpoint - The URL endpoint to send the DELETE request to.
   * @param id - The ID of the resource to be deleted.
   * @returns The response data, or `null` if an error occurs.
   */
  const remove = async (endpoint: string, id: number) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`${endpoint}/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Error in ${endpoint} DELETE: ${error}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, get, post, delete: remove };
}
