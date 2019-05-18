import http from './http';

export const getClonnoData = async () => {
  try {
    const response = await http.get('/clonno');
    return response.data;
  } catch (err) {
    return {};
  }
};