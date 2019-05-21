import http from './http';
import _get from 'lodash/get';

export const getClonnoData = async () => {
  try {
    const response = await http.get('/api/boards');
    return response.data;
  } catch (err) {
    return {};
  }
};

export const putClonnoData = async (saveClonno) => {
  try {
    const response = await http.put(`/api/boards/${saveClonno._id}`, {board: saveClonno});
    return response.data;
  } catch (err) {
    return {};
  }
};