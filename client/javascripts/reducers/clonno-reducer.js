import { UPDATE_CLONNO } from '../actions/types';

const clonno = {};

export default (state = clonno, action) => {
  switch (action.type) {
    case UPDATE_CLONNO: {
      let newState = { ...state };
      newState = action.clonnoData;
      return newState;
    }   
    default:
      return state;
  }
};
