import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { Stage, Layer, Line, Image } from 'react-konva';
import { window } from 'global/window';
import { COMPONENTS } from '../../constants';
import { NORTH_DIRECTION, WEST_DIRECTION, CELL_SIZE, WALL_STROKE, WALL_COLOR } from './constants';

class MazeDisplay extends Component {
  state = {
    pony: null,
    domokun: null,
    escape: null
  };

  componentDidMount() {
    const pony = new window.Image();
    pony.src = 'pony.png';
    pony.onload = () => {
      this.setState({
        pony
      });
    };

    const domokun = new window.Image();
    domokun.src = 'domokun.png';
    domokun.onload = () => {
      this.setState({
        domokun
      });
    };

    const escape = new window.Image();
    escape.src = 'escape.png';
    escape.onload = () => {
      this.setState({
        escape
      });
    };
  }

  renderMaze() {
    const { mazeData, mazeSize } = this.props;

    return (
      mazeData.map((cell, index) => {
        if (cell.includes(NORTH_DIRECTION) && cell.includes(WEST_DIRECTION)) {
          return (
            <Line
              points={[
                (index % mazeSize[0]) * CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE,
                ((index % mazeSize[0]) * CELL_SIZE) + CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE,
                (index % mazeSize[0]) * CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE,
                (index % mazeSize[0]) * CELL_SIZE, (Math.floor(index / mazeSize[0]) * CELL_SIZE) + CELL_SIZE
              ]}
              stroke={WALL_COLOR}
              strokeWidth={WALL_STROKE}
            />
          );
        } else if (cell.includes(NORTH_DIRECTION)) {
          return (
            <Line
              points={[
                (index % mazeSize[0]) * CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE,
                ((index % mazeSize[0]) * CELL_SIZE) + CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE
              ]}
              stroke={WALL_COLOR}
              strokeWidth={WALL_STROKE}
            />
          );
        } else if (cell.includes(WEST_DIRECTION)) {
          return (
            <Line
              points={[
                (index % mazeSize[0]) * CELL_SIZE, Math.floor(index / mazeSize[0]) * CELL_SIZE,
                (index % mazeSize[0]) * CELL_SIZE, (Math.floor(index / mazeSize[0]) * CELL_SIZE) + CELL_SIZE
              ]}
              stroke={WALL_COLOR}
              strokeWidth={WALL_STROKE}
            />
          );
        }
        return null;
      })
    );
  }

  renderMazeBorder() {
    const { mazeSize } = this.props;

    return (
      <Line
        points={[mazeSize[0] * CELL_SIZE, 0, mazeSize[0] * CELL_SIZE, mazeSize[1] * CELL_SIZE,
                 0, mazeSize[1] * CELL_SIZE, mazeSize[0] * CELL_SIZE, mazeSize[1] * CELL_SIZE]}
        stroke={WALL_COLOR}
        strokeWidth={WALL_STROKE}
      />
    );
  }

  renderImage(name, location) {
    const { mazeSize } = this.props;

    if (location === null) {
      return null;
    }

    return (
      <Image
        x={((location % mazeSize[0]) * CELL_SIZE) + 3}
        y={(Math.floor(location / mazeSize[0]) * CELL_SIZE) + 3}
        width={33}
        height={33}
        image={this.state[name]}
      />
    );
  }

  render() {
    const {
      theme,
      mazeData,
      ponyLocation,
      domokunLocation,
      endpointLocation,
      mazeSize
    } = this.props;

    if (mazeData === null) {
      return null;
    }

    return (
      <Stage className={theme.maze} width={(mazeSize[0] * CELL_SIZE) + 20} height={(mazeSize[1] * CELL_SIZE) + 20}>
        <Layer x={10} y={10}>
          {this.renderMaze()}
          {this.renderMazeBorder()}
          {this.renderImage('pony', ponyLocation)}
          {this.renderImage('domokun', domokunLocation)}
          {this.renderImage('escape', endpointLocation)}
        </Layer>
      </Stage>
    );
  }
}

MazeDisplay.propTypes = {
  mazeData: PropTypes.string,
  mazeSize: PropTypes.arrayOf(PropTypes.number),
  theme: PropTypes.object.isRequired,
  ponyLocation: PropTypes.number,
  domokunLocation: PropTypes.number,
  endpointLocation: PropTypes.number
};

export default themr(COMPONENTS.MAZE_DISPLAY)(MazeDisplay);
