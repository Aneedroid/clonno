import { APP_LOADING } from '../actions/types';

const appState = {
  loading: false,
};

export default function(state = appState, action) {
  switch (action.type) {
    case APP_LOADING: {
      const newState = { ...state };
      const loading = action.loading;
      newState.loading = loading;
      return newState;
    }
    default:
      return state;
  }
}
