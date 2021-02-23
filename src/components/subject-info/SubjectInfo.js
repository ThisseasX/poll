import { memo } from 'react';

import {
  Box,
  Popover,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core';

import { Close, Edit } from '@material-ui/icons';
import { styles } from './styles';
import { compose } from 'redux';

const SubjectInfo = ({ classes, anchorEl, onClose }) => (
  <Popover
    open={Boolean(anchorEl)}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Box
      className={classes.header}
      pl={2}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography variant={'h6'}>Info</Typography>

      <IconButton color={'primary'} onClick={onClose}>
        <Close color={'primary'} className={classes.closeIcon} />
      </IconButton>
    </Box>

    <Box p={2} style={{ maxWidth: '396px' }}>
      <Typography paragraph variant={'body1'}>
        This is your poll's&nbsp;<strong>subject</strong>.
      </Typography>

      <Typography variant={'body1'}>
        You can press{' '}
        <Edit color={'primary'} className={classes.inlineIcon} />{' '}
        to&nbsp;<strong>edit</strong>&nbsp;the subject to let everyone
        know&nbsp;<strong>why</strong>&nbsp;they are voting.
      </Typography>
    </Box>
  </Popover>
);

export default compose(withStyles(styles), memo)(SubjectInfo);
