import { useState } from "react";

import axios from "@/plugins/axios";
import { PayloadData } from "@/types/payload";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);

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
};

export default useRequest;
