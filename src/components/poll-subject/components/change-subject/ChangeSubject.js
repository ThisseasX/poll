import { memo } from 'react';
import { compose, withModelProps } from 'helpers';

import {
  Box,
  Button,
  TextField,
  withStyles,
} from '@material-ui/core';

import { pollSubject, setPollSubjectEffect } from 'models/app';
import { withChangeSubjectProps } from './withChangeSubjectProps';
import { styles } from './styles';

const ChangeSubject = ({
  classes,
  handleEditEnd,
  input,
  handleInput,
  handleKeyDown,
  handleChange,
}) => (
  <Box display={'flex'} pr={2}>
    <TextField
      label={'What should we vote for?'}
      variant={'outlined'}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      value={input}
      className={classes.input}
    />

    <Button
      variant={'contained'}
      color={'primary'}
      onClick={handleChange}
      className={classes.button}
    >
      DONE
    </Button>
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({ pollSubject, setPollSubjectEffect }),
  withChangeSubjectProps,
  memo,
)(ChangeSubject);
