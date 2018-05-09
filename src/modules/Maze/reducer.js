import { ACTION_TYPES } from './constants';

const initialState = {
  mazeId: null,
  mazeData: [],
  mazeSize: [],
  ponyLocation: null,
  domokunLocation: null,
  endpointLocation: null
};

export default function maze(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.MAZE_DATA_FETCHED: {
      return {
        ...state,
        mazeId: action.payload.mazeId,
        mazeData: action.payload.data,
        mazeSize: action.payload.size,
        ponyLocation: action.payload.pony,
        domokunLocation: action.payload.domokun,
        endpointLocation: action.payload['end-point']
      };
    }
    case ACTION_TYPES.PONY_MOVED: {
      return {
        ...state,
        ponyLocation: action.payload.mazeData.pony,
        domokunLocation: action.payload.mazeData.domokun,
        endpointLocation: action.payload.mazeData['end-point']
      };
    }
    default: return state;
  }
}
