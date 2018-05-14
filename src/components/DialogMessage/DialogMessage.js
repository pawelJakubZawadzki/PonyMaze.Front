import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import { COMPONENTS } from '../../constants';

const DialogMessage = (props) => {
  const {
    isDialogVisible,
    dialogMessage,
    setDialogVisibility,
    theme
  } = props;

  return (
    <Dialog
      active={isDialogVisible}
      onOverlayClick={() => setDialogVisibility(false)}
      className={theme.dialogMessage}
    >
      <p>{dialogMessage}</p>
      <Button
        label="Ok"
        raised
        primary
        onClick={() => setDialogVisibility(false)}
        className={theme.dialogButton}
      />
    </Dialog>
  );
};

DialogMessage.propTypes = {
  isDialogVisible: PropTypes.bool.isRequired,
  dialogMessage: PropTypes.string,
  setDialogVisibility: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.DIALOG_MESSAGE)(DialogMessage);
