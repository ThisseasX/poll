import { memo } from 'react';
import { compose } from 'helpers';

import {
  Box,
  Popover,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core';

import {
  Close,
  ExposurePlus1,
  DeleteForever,
} from '@material-ui/icons';

import { styles } from './styles';

const VoteInfo = ({ classes, anchorEl, onClose }) => (
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
      <Typography variant={'h6'}>Help</Typography>

      <IconButton color={'primary'} onClick={onClose}>
        <Close color={'primary'} className={classes.closeIcon} />
      </IconButton>
    </Box>

    <Box p={2} style={{ maxWidth: '396px' }}>
      <Typography gutterBottom variant={'h5'}>
        Adding New Entries
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can add new entries to be voted by typing them in the "New
        Entry" field and then pressing the "Add" button.
      </Typography>

      <Typography gutterBottom variant={'h5'}>
        Voting
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can vote for your favorite entry (or even all of them!) by
        pressing the&nbsp;
        <ExposurePlus1
          color={'secondary'}
          className={classes.inlineIcon}
        />
        &nbsp;button.
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can remove your vote by pressing the&nbsp;
        <ExposurePlus1
          color={'secondary'}
          className={classes.inlineIcon}
        />{' '}
        button again.
      </Typography>

      <Typography gutterBottom variant={'h5'}>
        Cleanup
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can remove entries by pressing the&nbsp;
        <DeleteForever
          color={'secondary'}
          className={classes.inlineIcon}
        />
        &nbsp;icon.
      </Typography>

      <Typography variant={'body1'}>
        You can also reset all votes by pressing the "Reset Votes"
        button.
      </Typography>
    </Box>
  </Popover>
);

export default compose(withStyles(styles), memo)(VoteInfo);
