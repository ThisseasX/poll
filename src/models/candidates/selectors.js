import { createSelector } from '@reduxjs/toolkit';
import { flow, map, get, find } from 'lodash/fp';
import { votesByCandidate, voteCountByCandidate } from 'models/votes';
import { userId } from 'models/app';
import { candidatesAdapter } from './adapter';

const selectors = candidatesAdapter.getSelectors(
  state => state.candidates,
);

const {
  selectById: candidateById,
  selectAll: allCandidates,
  selectEntities: allCandidatesEntities,
  selectIds: allCandidatesIds,
  selectTotal: allCandidatesCount,
} = selectors;

const candidatesWithVotes = createSelector(
  [allCandidates, voteCountByCandidate],
  (candidates, votes) =>
    flow(
      map(candidate => ({
        ...candidate,
        votes: votes[candidate.id],
      })),
    )(candidates),
);

const makeHasBeenVotedByUser = () =>
  createSelector(
    [votesByCandidate, userId, (_, props) => props.candidateId],
    (groupedVotes, userId, candidateId) =>
      flow(get(candidateId), find({ userId }), Boolean)(groupedVotes),
  );

const hasBeenVotedByUser = makeHasBeenVotedByUser();

export {
  candidateById,
  allCandidates,
  allCandidatesEntities,
  allCandidatesIds,
  allCandidatesCount,
  candidatesWithVotes,
  makeHasBeenVotedByUser,
  hasBeenVotedByUser,
};
