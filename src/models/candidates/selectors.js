import { createSelector } from '@reduxjs/toolkit';
import { flow, map, get, find } from 'lodash/fp';
import { votesByCandidate, voteCountByCandidate } from 'models/votes';
import { userId } from 'models/app';
import { candidatesAdapter } from './adapter';

const selectors = candidatesAdapter.getSelectors(
  state => state.candidates,
);

const candidateById = selectors.selectById;
const allCandidates = selectors.selectAll;
const allCandidatesEntities = selectors.selectEntities;
const allCandidatesIds = selectors.selectIds;
const allCandidatesCount = selectors.selectTotal;

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
