import { createBaseStore } from '@/stores/baseStore';
import { useRequest } from '@/stores/useRequest';
import { defineStore } from 'pinia';

export const useUser = defineStore('user', () => {
  const request = useRequest();
  const baseStore = createBaseStore('user', '/users')();
  const isAuthenticated: boolean = localStorage.getItem('AUTH_TOKEN') !== null;

  const login = async () => {
    // todo: fill that
    localStorage.setItem('AUTH_TOKEN', '');
    return await request.post('/login');
  };

  const logout = async () => {
    localStorage.removeItem('AUTH_TOKEN');
    return await request.post('/logout');
  };

  return {
    ...baseStore,
    isAuthenticated,
    login,
    logout,
  };
});
