import { ACTION_TYPES } from './constants';

export const fetchMazeData = mazeRequest => async (dispatch, getState, api) => {
  const response = await api.post('maze', mazeRequest);

  dispatch({
    type: ACTION_TYPES.MAZE_DATA_FETCHED,
    payload: response.data
  });
};

export const movePony = (movePonyRequest, mazeId) => async (dispatch, getState, api) => {
  const response = await api.post(`maze/${mazeId}`, movePonyRequest);

  dispatch({
    type: ACTION_TYPES.PONY_MOVED,
    payload: response.data
  });
};

export const setDialogVisibility = isDialogVisible => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_DIALOG_VISIBILITY,
    payload: isDialogVisible
  });
};

export const setDialogMessage = dialogMessage => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_DIALOG_MESSAGE,
    payload: dialogMessage
  });
};

export const setControlsAvailability = areControlsAvailable => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_CONTROLS_AVAILABLE,
    payload: areControlsAvailable
  });
};
