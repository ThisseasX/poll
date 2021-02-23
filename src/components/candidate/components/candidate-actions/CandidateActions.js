import { memo } from 'react';
import { compose, withModelPropsMemo } from 'helpers';
import cn from 'clsx';
import { Box, IconButton, withStyles } from '@material-ui/core';
import { ExposurePlus1, DeleteForever } from '@material-ui/icons';
import { toggleVoteEffect } from 'models/votes';

import {
  removeCandidateEffect,
  makeHasBeenVotedByUser,
} from 'models/candidates';

import { getColor } from './helpers';
import { withCandidateActionProps } from './withCandidateActionProps';
import { styles } from './styles';

const CandidateActions = ({
  classes,
  handleToggleVote,
  handleRemoveCandidate,
  hasBeenVotedByUser,
}) => (
  <Box>
    <IconButton
      size={'small'}
      color={getColor(hasBeenVotedByUser)}
      onClick={handleToggleVote}
      className={cn(classes.button, {
        [classes.buttonActive]: hasBeenVotedByUser,
      })}
    >
      <ExposurePlus1 color={getColor(hasBeenVotedByUser)} />
    </IconButton>

    <IconButton
      size={'small'}
      color={'secondary'}
      onClick={handleRemoveCandidate}
      className={classes.button}
    >
      <DeleteForever color={'error'} />
    </IconButton>
  </Box>
);

export default compose(
  withStyles(styles),
  withModelPropsMemo(
    {
      toggleVoteEffect,
      removeCandidateEffect,
    },
    {
      hasBeenVotedByUser: makeHasBeenVotedByUser,
    },
  ),
  withCandidateActionProps,
  memo,
)(CandidateActions);
