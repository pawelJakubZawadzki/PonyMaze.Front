import { connect } from 'react-redux';

import {
  selectPonies,
  fetchPonies
} from '../../modules/Pony';

import {
  fetchMazeData,
  setDialogVisibility,
  setDialogMessage
} from '../../modules/Maze';

const mapDispatchToProps = {
  fetchPonies,
  fetchMazeData,
  setDialogVisibility,
  setDialogMessage
};

const mapStateToProps = state => ({
  ponies: selectPonies(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
