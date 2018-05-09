import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';

class MazeManagement extends Component {
  state = {
    selectedPony: null,
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
    const { fetchMazeData } = this.props;
    const {
      selectedPony,
      mazeWidth,
      mazeHeight,
      mazeDifficulty
    } = this.state;

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
        />
        <Input
          className={theme.widthInput}
          type="number"
          label="Maze width"
          value={this.state.mazeWidth}
          onChange={this.handleMazeWidthChange}
        />
        <Input
          className={theme.heightInput}
          type="number"
          label="Maze height"
          value={this.state.mazeHeight}
          onChange={this.handleMazeHeightChange}
        />
        <Input
          className={theme.difficultyInput}
          type="number"
          label="Difficulty"
          value={this.state.mazeDifficulty}
          onChange={this.handleMazeDifficultyChange}
        />
        <Button
          className={theme.button}
          label="Generate Maze"
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
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.MAZE_MANAGEMENT)(MazeManagement);
