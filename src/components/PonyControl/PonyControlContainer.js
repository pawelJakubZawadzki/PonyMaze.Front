import { connect } from 'react-redux';
import {
  movePony,
  selectMazeId
} from '../../modules/Maze';

const mapDispatchToProps = {
  movePony
};

const mapStateToProps = state => ({
  mazeId: selectMazeId(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
