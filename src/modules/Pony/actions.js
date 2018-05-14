import { ACTION_TYPES } from './constants';

export const fetchPonies = () => async (dispatch, getState, api) => {
  const response = await api.get('pony');

  dispatch({
    type: ACTION_TYPES.PONIES_FETCHED,
    payload: response.data
  });
};
