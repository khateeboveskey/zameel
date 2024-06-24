import { defineStore } from 'pinia';
import { useRequest } from './useRequest';

export const createBaseStore = (storeId: string, endpoint: string) => {
  return defineStore(storeId, () => {
    const request = useRequest();

    /**
     * Fetches a single resource from the API endpoint.
     *
     * @param id - The ID of the resource to fetch.
     * @returns The fetched resource data.
     */
    async function find(id: number): Promise<any> {
      return await request.get(`${endpoint}/${id}`);
    }

    /**
     * Fetches all resources from the API endpoint.
     *
     * @returns The fetched resource data.
     */
    async function all(): Promise<any> {
      return await request.get(endpoint);
    }

    /**
     * Creates a new resource at the API endpoint.
     *
     * @param data - The data for the new resource.
     * @returns The created resource data.
     */
    async function create(data?: JSON): Promise<any> {
      return await request.post(endpoint, data);
    }

    /**
     * Updates a resource at the API endpoint with the specified ID.
     *
     * @param id - The ID of the resource to update.
     * @param data - The updated data for the resource.
     * @returns The updated resource data.
     */
    async function update(id: string, data: JSON): Promise<any> {
      return await request.put(`${endpoint}/${id}`, id, data);
    }

    /**
     * Deletes a resource from the API endpoint by the given ID.
     *
     * Note: `delete` is a reserved word in TS. 
     *
     * @param id - The ID of the resource to delete.
     * @returns The response data from the delete request.
     */
    async function remove(id: number): Promise<any> {
      return await request.delete(`${endpoint}/${id}`, id);
    }

    return {
      isFinished: request.isFinished,
      find,
      all,
      create,
      update,
      delete: remove,
    };
  });
};
