import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';
import {
  UP_LABEL,
  DOWN_LABEL,
  LEFT_LABEL,
  RIGHT_LABEL,
  NORTH_MOVE,
  SOUTH_MOVE,
  WEST_MOVE,
  EAST_MOVE,
  AUTOMATICALLY_MOVE,
  AUTOMATICALLY_LABEL
} from './constants';

class PonyControl extends Component {
  handleButtonClick = (direction) => {
    const { movePony, mazeId, setControlsAvailability } = this.props;

    const mazeRequest = {
      direction
    };

    setControlsAvailability(false);
    movePony(mazeRequest, mazeId);
  }

  render() {
    const { theme, areControlsAvailable } = this.props;

    return (
      <div>
        <Button
          className={theme.upButton}
          label={UP_LABEL}
          raised
          primary
          onClick={() => this.handleButtonClick(NORTH_MOVE)}
          disabled={!areControlsAvailable}
        />
        <Button
          className={theme.downButton}
          label={DOWN_LABEL}
          raised
          primary
          onClick={() => this.handleButtonClick(SOUTH_MOVE)}
          disabled={!areControlsAvailable}
        />
        <Button
          className={theme.leftButton}
          label={LEFT_LABEL}
          raised
          primary
          onClick={() => this.handleButtonClick(WEST_MOVE)}
          disabled={!areControlsAvailable}
        />
        <Button
          className={theme.rightButton}
          label={RIGHT_LABEL}
          raised
          primary
          onClick={() => this.handleButtonClick(EAST_MOVE)}
          disabled={!areControlsAvailable}
        />
        <Button
          className={theme.automaticallyButton}
          label={AUTOMATICALLY_LABEL}
          raised
          primary
          onClick={() => this.handleButtonClick(AUTOMATICALLY_MOVE)}
          disabled={!areControlsAvailable}
        />
      </div>
    );
  }
}

PonyControl.propTypes = {
  movePony: PropTypes.func.isRequired,
  mazeId: PropTypes.string,
  theme: PropTypes.object.isRequired,
  setControlsAvailability: PropTypes.func.isRequired,
  areControlsAvailable: PropTypes.bool.isRequired
};

export default themr(COMPONENTS.PONY_CONTROL)(PonyControl);
