import {
  FETCH_CLONNO,
  UPDATE_CLONNO,
} from './types';

export const fetchClonno = () => {
  return { type: FETCH_CLONNO };
};

export const updateClonno = clonnoData => {
  return { type: UPDATE_CLONNO, clonnoData };
};