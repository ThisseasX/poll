import { memo } from 'react';
import { compose, withModelProps } from 'helpers';

import {
  Box,
  TextField,
  Button,
  withStyles,
} from '@material-ui/core';

import { pollId } from 'models/app';
import { withChangePollProps } from './withChangePollProps';
import { styles } from './styles';

const ChangePoll = ({
  classes,
  input,
  handleInput,
  handleKeyDown,
  handleRedirect,
}) => (
  <Box display={'flex'} pr={2}>
    <TextField
      autoFocus
      label={'Poll ID'}
      variant={'outlined'}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      value={input}
      className={classes.input}
    />

    <Button
      variant={'contained'}
      color={'primary'}
      onClick={handleRedirect}
      className={classes.button}
    >
      GO
    </Button>
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({ pollId }),
  withChangePollProps,
  memo,
)(ChangePoll);
