import http from './http';

export const getClonnoData = async () => {
  try {
    const response = await http.get('/api/boards');
    return response.data;
  } catch (err) {
    return {};
  }
};