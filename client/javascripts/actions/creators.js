import {
  PUT_CONTENT,
  PUT_SWAPI,
  GET_SWAPI_DATA,
  FETCH_CLONNO,
  UPDATE_CLONNO,
} from './types';

export const putContentToState = content => {
  return { type: PUT_CONTENT, content };
};

export const putSwapiToState = swapi => {
  return { type: PUT_SWAPI, swapi };
};

export const getSwapi = () => {
  return { type: GET_SWAPI_DATA };
};

export const fetchClonno = () => {
  return { type: FETCH_CLONNO };
};

export const updateClonno = clonnoData => {
  return { type: UPDATE_CLONNO, clonnoData };
};