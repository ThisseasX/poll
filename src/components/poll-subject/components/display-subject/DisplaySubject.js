import { memo } from 'react';
import { compose, withModelProps, withPopoverProps } from 'helpers';

import {
  Box,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core';

import { Edit, Info } from '@material-ui/icons';
import { SubjectInfo } from 'components';
import { pollSubject } from 'models/app';
import { styles } from './styles';

const DEFAULT_POLL_SUBJECT = 'What should we vote for?';

const DisplaySubject = ({
  classes,
  handleEditStart,
  pollSubject,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
}) => (
  <Box display={'flex'}>
    <Box flex={1}>
      {pollSubject ? (
        <Typography variant={'caption'} component={'span'}>
          What should we vote for?
        </Typography>
      ) : (
        <div style={{ height: '14px' }} />
      )}

      <Typography variant={'h6'}>
        {pollSubject || DEFAULT_POLL_SUBJECT}
      </Typography>
    </Box>

    <IconButton
      variant={'contained'}
      color={'primary'}
      onClick={handleEditStart}
      className={classes.button}
      alt={'move'}
    >
      <Edit color={'primary'} />
    </IconButton>

    <IconButton
      variant={'contained'}
      color={'primary'}
      onClick={handlePopoverOpen}
      className={classes.button}
      alt={'move'}
    >
      <Info color={'primary'} />
    </IconButton>

    <SubjectInfo anchorEl={anchorEl} onClose={handlePopoverClose} />
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({ pollSubject }),
  withPopoverProps,
  memo,
)(DisplaySubject);
