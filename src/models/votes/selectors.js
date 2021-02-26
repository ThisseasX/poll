import {
  flow,
  max,
  countBy,
  values,
  groupBy,
  filter,
  map,
} from 'lodash/fp';

import { createSelector } from '@reduxjs/toolkit';
import { votesAdapter } from './adapter';

const selectors = votesAdapter.getSelectors(state => state.votes);

const {
  selectById: voteById,
  selectAll: allVotes,
  selectEntities: allVotesEntities,
  selectIds: allVotesIds,
  selectTotal: allVotesCount,
} = selectors;

const votesByCandidate = createSelector(allVotes, votes =>
  groupBy('candidateId', votes),
);

const voteCountByCandidate = createSelector(allVotes, votes =>
  countBy('candidateId', votes),
);

const maxVote = createSelector(voteCountByCandidate, voteCount =>
  flow(values, max)(voteCount),
);

const makeVoteIdsOfCandidate = () =>
  createSelector(
    [allVotes, (_, props) => props.candidateId],
    (votes, candidateId) =>
      flow(filter({ candidateId }), map('id'))(votes),
  );

const voteIdsOfCandidate = makeVoteIdsOfCandidate();

export {
  voteById,
  allVotes,
  allVotesEntities,
  allVotesIds,
  allVotesCount,
  votesByCandidate,
  voteCountByCandidate,
  maxVote,
  makeVoteIdsOfCandidate,
  voteIdsOfCandidate,
};
