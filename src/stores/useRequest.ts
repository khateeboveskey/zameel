import axios from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useRequest = defineStore('request', () => {
  const state = {
    isFinished: false,
  };

  /**
   * Sends a GET request to the specified endpoint with the provided ID and returns the response data.
   *
   * @param endpoint - The URL endpoint to send the GET request to.
   * @param id - The ID of the resource to retrieve.
   * @returns The response data from the GET request.
   */
  async function get(endpoint: string) {
    state.isFinished = false;
    try {
      const res = await axios.get(endpoint);
      state.isFinished = true;
      return res.data.data;
    } catch (error) {
      // console.error(error);
      state.isFinished = true;
    }
  }

  /**
   * Sends a POST request to the specified endpoint with the provided data.
   *
   * @param endpoint - The URL endpoint to send the POST request to.
   * @param data - The data to be sent in the POST request body.
   * @returns The response data from the POST request.
   */
  async function post(endpoint: string, data?: object): Promise<any> {
    state.isFinished = false;
    try {
      const res = await axios.post(endpoint, JSON.stringify(data));
      state.isFinished = true;
      // if (endpoint !== '/login' || endpoint !== '/logout') {
      //   get(endpoint, true);
      // }
      return res.data;
    } catch (error) {
      // console.error(error);
      state.isFinished = true;
    }
  }

  /**
   * Sends a PUT request to the specified endpoint with the provided data.
   *
   * @param endpoint - The URL endpoint to send the PUT request to.
   * @param id - The ID of the resource to update.
   * @param data - The data to be sent in the PUT request body.
   * @returns The response data from the PUT request.
   */
  async function put(endpoint: string, id: string, data: object): Promise<any> {
    state.isFinished = false;
    try {
      const res = await axios.put(endpoint, JSON.stringify(data));
      state.isFinished = true;
      // if (endpoint !== '/login' || endpoint !== '/logout') {
      //   get(endpoint, true);
      // }
      return res.data;
    } catch (error) {
      // console.error(error);
      state.isFinished = true;
    }
  }

  /**
   * Sends a DELETE request to the specified endpoint with the provided ID.
   *
   * Note: `delete` is a reserved word in TS.
   *
   * @param endpoint - The URL endpoint to send the DELETE request to.
   * @param id - The ID of the resource to delete.
   * @returns The response data from the DELETE request.
   */
  async function remove(endpoint: string, id: number): Promise<any> {
    state.isFinished = false;
    try {
      const res = await axios.delete(`${endpoint}/${id}`);
      state.isFinished = true;
      return res.data;
    } catch (error) {
      // console.error(error);
      state.isFinished = true;
    }
  }

  return {
    isFinished: state.isFinished,
    get,
    post,
    put,
    delete: remove,
  };
});
