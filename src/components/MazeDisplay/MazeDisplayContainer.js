import { connect } from 'react-redux';
import {
  fetchMazeData,
  selectMazeData,
  selectMazeId,
  selectMazeSize,
  selectPonyLocation,
  selectDomokunLocation,
  selectEndpointLocation
} from '../../modules/Maze';

const mapDispatchToProps = {
  fetchMazeData
};

const mapStateToProps = state => ({
  mazeData: selectMazeData(state),
  mazeId: selectMazeId(state),
  mazeSize: selectMazeSize(state),
  ponyLocation: selectPonyLocation(state),
  domokunLocation: selectDomokunLocation(state),
  endpointLocation: selectEndpointLocation(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
