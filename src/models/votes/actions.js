import { namespaceActionCreator } from 'helpers';
import { votesSlice } from './slice';

const { addVote, addVotes, removeVote, removeVotes } =
  votesSlice.actions;

const createNamespacedAction = namespaceActionCreator('votes');

const toggleVoteEffect = createNamespacedAction('toggleVote/effect');
const resetVotesEffect = createNamespacedAction('resetVotes/effect');

export {
  addVote,
  addVotes,
  removeVote,
  removeVotes,
  toggleVoteEffect,
  resetVotesEffect,
};
