import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';
import {
  MAZE_DIFFICULTY_WARNING,
  MAZE_DIMENSIONS_WARNING,
  WIDTH_LABEL,
  HEIGHT_LABEL,
  DIFFICULTY_LABEL,
  GENERATE_LABEL,
  PONY_LABEL
} from './constants';

class MazeManagement extends Component {
  state = {
    selectedPony: 'Applejack',
    mazeWidth: 0,
    mazeHeight: 0,
    mazeDifficulty: 0
  };

  componentWillMount() {
    const { fetchPonies } = this.props;

    fetchPonies();
  }

  handlePonyChange = (pony) => {
    this.setState({ selectedPony: pony });
  };

  handleMazeWidthChange = (width) => {
    this.setState({ mazeWidth: width });
  };

  handleMazeHeightChange = (height) => {
    this.setState({ mazeHeight: height });
  };

  handleMazeDifficultyChange = (difficulty) => {
    this.setState({ mazeDifficulty: difficulty });
  };

  handleSubmitButtonClick = () => {
    const { fetchMazeData, setDialogMessage, setDialogVisibility } = this.props;
    const {
      selectedPony,
      mazeWidth,
      mazeHeight,
      mazeDifficulty
    } = this.state;

    if (mazeWidth < 15 || mazeWidth > 25 || mazeHeight < 15 || mazeHeight > 25) {
      setDialogMessage(MAZE_DIMENSIONS_WARNING);
      setDialogVisibility(true);

      return;
    }

    if (mazeDifficulty < 0 || mazeDifficulty > 10) {
      setDialogMessage(MAZE_DIFFICULTY_WARNING);
      setDialogVisibility(true);

      return;
    }

    const mazeRequest = {
      'maze-player-name': selectedPony,
      'maze-width': mazeWidth,
      'maze-height': mazeHeight,
      difficulty: mazeDifficulty
    };

    fetchMazeData(mazeRequest);
  }

  render() {
    const { ponies, theme } = this.props;

    return (
      <div className={theme.controlsContainer}>
        <Dropdown
          className={theme.ponyDropdown}
          auto
          onChange={this.handlePonyChange}
          source={ponies.map(pony => ({ value: pony, label: pony }))}
          value={this.state.selectedPony}
          label={PONY_LABEL}
        />
        <Input
          className={theme.widthInput}
          type="number"
          label={WIDTH_LABEL}
          value={this.state.mazeWidth}
          onChange={this.handleMazeWidthChange}
        />
        <Input
          className={theme.heightInput}
          type="number"
          label={HEIGHT_LABEL}
          value={this.state.mazeHeight}
          onChange={this.handleMazeHeightChange}
        />
        <Input
          className={theme.difficultyInput}
          type="number"
          label={DIFFICULTY_LABEL}
          value={this.state.mazeDifficulty}
          onChange={this.handleMazeDifficultyChange}
        />
        <Button
          className={theme.button}
          label={GENERATE_LABEL}
          raised
          primary
          onClick={this.handleSubmitButtonClick}
        />
      </div>
    );
  }
}

MazeManagement.propTypes = {
  ponies: PropTypes.arrayOf(PropTypes.string),
  fetchPonies: PropTypes.func.isRequired,
  fetchMazeData: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  setDialogMessage: PropTypes.func.isRequired,
  setDialogVisibility: PropTypes.func.isRequired
};

export default themr(COMPONENTS.MAZE_MANAGEMENT)(MazeManagement);
