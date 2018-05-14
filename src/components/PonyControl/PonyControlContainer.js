import { connect } from 'react-redux';
import {
  movePony,
  selectMazeId,
  selectAreControlsAvailable,
  setControlsAvailability
} from '../../modules/Maze';

const mapDispatchToProps = {
  movePony,
  setControlsAvailability
};

const mapStateToProps = state => ({
  mazeId: selectMazeId(state),
  areControlsAvailable: selectAreControlsAvailable(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
