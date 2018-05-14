import { ACTION_TYPES } from './constants';

const initialState = {
  mazeId: null,
  mazeData: [],
  mazeSize: [],
  ponyLocation: null,
  domokunLocation: null,
  endpointLocation: null,
  dialogMessage: null,
  isDialogVisible: false,
  areControlsAvailable: true
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
      if (!action.payload.isSuccessful) {
        return {
          ...state,
          isDialogVisible: true,
          dialogMessage: action.payload['state-result'],
          areControlsAvailable: true
        };
      }

      return {
        ...state,
        ponyLocation: action.payload.mazeData.pony,
        domokunLocation: action.payload.mazeData.domokun,
        endpointLocation: action.payload.mazeData['end-point'],
        areControlsAvailable: true
      };
    }
    case ACTION_TYPES.SET_DIALOG_VISIBILITY: {
      return {
        ...state,
        isDialogVisible: action.payload
      };
    }
    case ACTION_TYPES.SET_DIALOG_MESSAGE: {
      return {
        ...state,
        dialogMessage: action.payload
      };
    }
    case ACTION_TYPES.SET_CONTROLS_AVAILABLE: {
      return {
        ...state,
        areControlsAvailable: action.payload
      };
    }
    default: return state;
  }
}
