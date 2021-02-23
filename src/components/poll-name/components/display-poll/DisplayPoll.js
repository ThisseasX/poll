import { memo } from 'react';
import { compose, withModelProps, withPopoverProps } from 'helpers';

import {
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
  Tooltip,
  withStyles,
} from '@material-ui/core';

import { Edit, Info, FileCopy } from '@material-ui/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PollInfo } from 'components';
import { pollId } from 'models/app';

import {
  copyToClipboard,
  isClipboardTooltipOpen,
  setIsClipboardTooltipOpen,
} from 'models/ui';

import { styles } from './styles';

const DisplayPoll = ({
  classes,
  handleEdit,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
  pollId,
  copyToClipboard,
  isClipboardTooltipOpen,
  setIsClipboardTooltipOpen,
}) => (
  <Box display={'flex'}>
    <Box flex={1}>
      <Typography variant={'caption'} component={'span'}>
        This poll's ID is:
      </Typography>

      <Typography variant={'h5'} className={classes.pollName}>
        {pollId}
      </Typography>
    </Box>

    <ClickAwayListener
      onClickAway={() => {
        setIsClipboardTooltipOpen(false);
      }}
    >
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={() => {
            setIsClipboardTooltipOpen(false);
          }}
          open={isClipboardTooltipOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Copied to clipboard"
        >
          <CopyToClipboard
            text={`${window.location.hostname}/${pollId}`}
            onCopy={() => {
              copyToClipboard();
            }}
          >
            <IconButton
              variant={'contained'}
              color={'primary'}
              className={classes.button}
              alt={'move'}
            >
              <FileCopy color={'primary'} />
            </IconButton>
          </CopyToClipboard>
        </Tooltip>
      </div>
    </ClickAwayListener>

    <IconButton
      variant={'contained'}
      color={'primary'}
      onClick={handleEdit}
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

    <PollInfo anchorEl={anchorEl} onClose={handlePopoverClose} />
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({
    pollId,
    copyToClipboard,
    isClipboardTooltipOpen,
    setIsClipboardTooltipOpen,
  }),
  withPopoverProps,
  memo,
)(DisplayPoll);
