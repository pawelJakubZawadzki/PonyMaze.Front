import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';

class PonyControl extends Component {
  handleButtonClick = (direction) => {
    const { movePony, mazeId } = this.props;

    const mazeRequest = {
      direction
    };

    movePony(mazeRequest, mazeId);
  }

  render() {
    const { theme } = this.props;

    return (
      <div>
        <Button
          className={theme.upButton}
          label="Up"
          raised
          primary
          onClick={() => this.handleButtonClick('north')}
        />
        <Button
          className={theme.downButton}
          label="Down"
          raised
          primary
          onClick={() => this.handleButtonClick('south')}
        />
        <Button
          className={theme.leftButton}
          label="Left"
          raised
          primary
          onClick={() => this.handleButtonClick('west')}
        />
        <Button
          className={theme.rightButton}
          label="Right"
          raised
          primary
          onClick={() => this.handleButtonClick('east')}
        />
        <Button
          className={theme.automaticallyButton}
          label="Automatically"
          raised
          primary
          onClick={() => this.handleButtonClick('automatically')}
        />
      </div>
    );
  }
}

PonyControl.propTypes = {
  movePony: PropTypes.func.isRequired,
  mazeId: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.PONY_CONTROL)(PonyControl);
