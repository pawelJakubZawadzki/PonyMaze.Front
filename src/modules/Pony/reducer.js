import { ACTION_TYPES } from './constants';

const initialState = {
  ponies: []
};

export default function pony(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.PONIES_FETCHED: {
      return {
        ...state,
        ponies: action.payload
      };
    }

    default: return state;
  }
}
