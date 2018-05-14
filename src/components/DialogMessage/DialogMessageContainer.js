import { connect } from 'react-redux';
import {
  setDialogVisibility,
  selectIsDialogVisible,
  selectDialogMessage
} from '../../modules/Maze';

const mapDispatchToProps = {
  setDialogVisibility
};

const mapStateToProps = state => ({
  isDialogVisible: selectIsDialogVisible(state),
  dialogMessage: selectDialogMessage(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
