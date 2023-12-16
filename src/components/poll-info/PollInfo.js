import { memo } from 'react';
import { compose } from 'helpers';

import {
  Box,
  Popover,
  Typography,
  IconButton,
  Tooltip,
  withStyles,
} from '@material-ui/core';

import { Close, Edit, FileCopy, Link } from '@material-ui/icons';
import QRCode from 'react-qr-code';
import { styles } from './styles';

const PollInfo = ({ classes, anchorEl, onClose }) => (
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

      <Box display={'flex'}>
        <Tooltip
          title={<QRCode value={window.location.href} />}
          placement="bottom-end"
          classes={{
            tooltip: classes.tooltip,
          }}
        >
          <IconButton color={'primary'}>
            <Link color={'primary'} className={classes.closeIcon} />
          </IconButton>
        </Tooltip>

        <IconButton color={'primary'} onClick={onClose}>
          <Close color={'primary'} className={classes.closeIcon} />
        </IconButton>
      </Box>
    </Box>

    <Box p={2} style={{ maxWidth: '396px' }}>
      <Typography paragraph variant={'body1'}>
        This is the&nbsp;<strong>unique</strong>&nbsp;identifier of
        this poll.
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can press{' '}
        <Edit color={'primary'} className={classes.inlineIcon} />{' '}
        to&nbsp;<strong>edit</strong>&nbsp;this to specify another
        identifier. If that identifier already&nbsp;
        <strong>exists</strong>, you will&nbsp;<strong>visit</strong>
        &nbsp;the poll identified by it, and you can see its results.
      </Typography>

      <Typography paragraph variant={'body1'}>
        You can also press{' '}
        <FileCopy color={'primary'} className={classes.inlineIcon} />{' '}
        to&nbsp;<strong>copy</strong>&nbsp;this identifier to share it
        with your friends as a link. You friends can then open the
        link you gave them, or paste it directly in the "Poll ID"
        field, so that they can visit and see your poll.
      </Typography>

      <Typography paragraph variant={'body1'}>
        If you specify an identifier that&nbsp;
        <strong>does not already exist</strong>, a new poll will&nbsp;
        <strong>automatically be created</strong>
        &nbsp;for you.
      </Typography>

      <Typography variant={'body1'}>
        If you want to&nbsp;<strong>create a new poll</strong>, make
        sure you supply a&nbsp;
        <strong>sufficiently unguessable identifier</strong>, else you
        might have other people visiting your poll by accident!
      </Typography>
    </Box>
  </Popover>
);

export default compose(withStyles(styles), memo)(PollInfo);
