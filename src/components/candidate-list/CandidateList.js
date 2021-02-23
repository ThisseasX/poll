import { memo } from 'react';
import { isEmpty } from 'lodash/fp';
import { compose, withModelProps } from 'helpers';

import {
  Box,
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Candidate } from 'components';
import { candidatesWithVotes } from 'models/candidates';
import { resetVotesEffect, allVotesCount } from 'models/votes';
import { styles } from './styles';
import { withCandidateListProps } from './withCandidateListProps';

const CandidateList = ({
  classes,
  candidatesWithVotes,
  handleReset,
  allVotesCount,
}) => (
  <>
    <Box mt={2} py={1} px={3} className={classes.candidateList}>
      {isEmpty(candidatesWithVotes) ? (
        <Typography variant={'h4'} align={'center'}>
          Your poll is empty!
        </Typography>
      ) : (
        candidatesWithVotes.map(({ id, title, votes }) => (
          <Candidate
            key={id}
            candidateId={id}
            title={title}
            votes={votes}
          />
        ))
      )}
    </Box>

    {!isEmpty(candidatesWithVotes) && (
      <Box pt={3} pb={1} px={3}>
        <Button
          fullWidth
          variant={'contained'}
          color={'secondary'}
          onClick={handleReset}
          disabled={allVotesCount < 1}
          className={classes.button}
        >
          Reset Votes
        </Button>
      </Box>
    )}
  </>
);

export default compose(
  withStyles(styles),
  withModelProps({
    candidatesWithVotes,
    resetVotesEffect,
    allVotesCount,
  }),
  withCandidateListProps,
  memo,
)(CandidateList);
