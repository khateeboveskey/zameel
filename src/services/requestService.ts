import axios from '@/plugins/axios';

export default class Request {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async find(id: number) {
    try {
      const res = await axios.get(`${this.endpoint}/${id}`);
      return res.data.data;
    } catch (error) {
      // console.error(error);
    }
  }

  async findAll() {
    try {
      const res = await axios.get(this.endpoint);
      return res.data.data;
    } catch (error) {
      // console.error(error);
    }
  }

  // todo: check JSON
  async post(data: JSON): Promise<any> {
    try {
      const res = await axios.post(this.endpoint, JSON.stringify(data));
      // if (endpoint !== '/login' || endpoint !== '/logout') {
      //   this.get(endpoint, true);
      // }
      return res.data;
    } catch (error) {
      // console.error(error);
    }
  }

  // todo: check JSON
  async put(id: string, data: JSON): Promise<any> {
    try {
      const res = await axios.put(this.endpoint, JSON.stringify(data));
      // if (endpoint !== '/login' || endpoint !== '/logout') {
      //   this.get(endpoint, true);
      // }
      return res.data;
    } catch (error) {
      // console.error(error);
    }
  }

  async delete(id: number): Promise<any> {
    try {
      const res = await axios.delete(`${this.endpoint}/${id}`);
      return res.data;
    } catch (error) {
      // console.error(error);
    }
  }
}
