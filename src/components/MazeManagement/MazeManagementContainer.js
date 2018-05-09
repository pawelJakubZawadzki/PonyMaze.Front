import { connect } from 'react-redux';

import {
  selectPonies,
  fetchPonies
} from '../../modules/Pony';

import { fetchMazeData } from '../../modules/Maze';

const mapDispatchToProps = {
  fetchPonies,
  fetchMazeData
};

const mapStateToProps = state => ({
  ponies: selectPonies(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
