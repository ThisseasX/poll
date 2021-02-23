import { memo } from 'react';
import { compose, withModelProps } from 'helpers';

import {
  Box,
  LinearProgress,
  Typography,
  withStyles,
} from '@material-ui/core';

import { maxVote } from 'models/votes';
import { getProgress } from './helpers';
import { styles } from './styles';

const CandidateTitle = ({
  classes,
  title,
  votes = 0,
  maxVote = 0,
}) => (
  <Box flex={1} mr={2}>
    <Box
      display={'flex'}
      alignItems={'flex-end'}
      justifyContent={'space-between'}
    >
      <Typography
        variant={'h6'}
        gutterBottom
        style={{ wordBreak: 'break-word' }}
      >
        {title}
      </Typography>

      <Box ml={1}>
        <Typography variant={'overline'}>{votes}</Typography>
      </Box>
    </Box>

    <LinearProgress
      variant={'determinate'}
      color={'primary'}
      value={getProgress(votes, maxVote)}
      classes={{ colorPrimary: classes.bar }}
    />
  </Box>
);

export default compose(
  withStyles(styles),
  withModelProps({ maxVote }),
  memo,
)(CandidateTitle);
