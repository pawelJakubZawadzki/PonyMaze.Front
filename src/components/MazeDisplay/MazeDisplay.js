import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { Stage, Layer, Line, Image } from 'react-konva';
import { COMPONENTS } from '../../constants';

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
        if (cell.includes('north') && cell.includes('west')) {
          return (
            <Line
              points={[(index % mazeSize[0]) * 40, Math.floor(index / mazeSize[0]) * 40, ((index % mazeSize[0]) * 40) + 40, Math.floor(index / mazeSize[0]) * 40,
                       (index % mazeSize[0]) * 40, Math.floor(index / mazeSize[0]) * 40, (index % mazeSize[0]) * 40, (Math.floor(index / mazeSize[0]) * 40) + 40]}
              stroke="blue"
              strokeWidth={5}
            />
          );
        } else if (cell.includes('north')) {
          return (
            <Line
              points={[(index % mazeSize[0]) * 40, Math.floor(index / mazeSize[0]) * 40, ((index % mazeSize[0]) * 40) + 40, Math.floor(index / mazeSize[0]) * 40]}
              stroke="blue"
              strokeWidth={5}
            />
          );
        } else if (cell.includes('west')) {
          return (
            <Line
              points={[(index % mazeSize[0]) * 40, Math.floor(index / mazeSize[0]) * 40, (index % mazeSize[0]) * 40, (Math.floor(index / mazeSize[0]) * 40) + 40]}
              stroke="blue"
              strokeWidth={5}
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
        points={[mazeSize[0] * 40, 0, mazeSize[0] * 40, mazeSize[1] * 40,
                 0, mazeSize[1] * 40, mazeSize[0] * 40, mazeSize[1] * 40]}
        stroke="blue"
        strokeWidth={5}
      />
    );
  }

  renderImage(name, location) {
    const { mazeSize } = this.props;

    return (
      <Image
        x={((location % mazeSize[0]) * 40) + 3}
        y={(Math.floor(location / mazeSize[0]) * 40) + 3}
        width={33}
        height={33}
        image={this.state[name]}
      />
    );
  }

  render() {
    const {
      theme, mazeData, ponyLocation, domokunLocation, endpointLocation
    } = this.props;

    if (mazeData === null) {
      return null;
    }

    return (
      <Stage className={theme.maze} width={650} height={650}>
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
