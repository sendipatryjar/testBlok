import axios from 'axios';
export const BASE_URL = 'https://pokeapi.co/api/v2';

export const API = {
    async get(url: string, headers?: any): Promise<any> {
      const response = await axios.get(url, {
        baseURL: BASE_URL,
        headers,
      });
  
      return response?.data;
    },
    async getUrl(url: string, headers?: any): Promise<any> {
      const response = await axios.get(url, {
        baseURL: url,
        headers,
      });
  
      return response?.data;
    },
    async post(url: string, body?: any, headers?: any): Promise<any> {
      const response = await axios.post(url, body, {
        baseURL: BASE_URL,
        headers,
      });
  
      return response?.data;
    },
   
  };