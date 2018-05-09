import { combineReducers } from 'redux';
import pony from './Pony/reducer';
import maze from './Maze/reducer';

const reducers = combineReducers({
    pony,
    maze
});

export default reducers;

