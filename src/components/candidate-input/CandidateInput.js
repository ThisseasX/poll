import { memo } from 'react';
import { compose, withModelProps, withPopoverProps } from 'helpers';

import {
  Box,
  TextField,
  Button,
  IconButton,
  withStyles,
} from '@material-ui/core';

import { HelpOutline } from '@material-ui/icons';
import { VoteInfo } from 'components';
import { addCandidateEffect } from 'models/candidates';
import { withCandidateInputProps } from './withCandidateInputProps';
import { styles } from './styles';

const CandidateInput = ({
  classes,
  input,
  handleInput,
  handleAdd,
  handleKeyDown,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
}) => (
  <Box px={3} pr={1} display={'flex'} flexDirection={'column'}>
    <Box mb={2} display={'flex'}>
      <TextField
        fullWidth
        label={'New Entry'}
        variant={'outlined'}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={input}
      />

      {input && (
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={handleAdd}
          disabled={!input}
          className={classes.button}
        >
          Add
        </Button>
      )}

      <IconButton
        variant={'contained'}
        color={'primary'}
        onClick={handlePopoverOpen}
        className={classes.iconButton}
      >
        <HelpOutline color={'primary'} />
      </IconButton>
    </Box>

    <VoteInfo anchorEl={anchorEl} onClose={handlePopoverClose} />
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({
    addCandidateEffect,
  }),
  withCandidateInputProps,
  withPopoverProps,
  memo,
)(CandidateInput);
