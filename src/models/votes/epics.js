import { combineEpics } from 'redux-observable';
import { toggleVoteEffect, resetVotesEffect } from 'models/votes';
import { toggleVoteRequest, resetVotesRequest } from 'services';
import { makeRequest } from 'helpers';

const toggleVoteEffectEpic = makeRequest(toggleVoteEffect, toggleVoteRequest)

const resetVotesEffectEpic = makeRequest(resetVotesEffect, resetVotesRequest)

const votesEpics = combineEpics(
  toggleVoteEffectEpic,
  resetVotesEffectEpic,
);

export { votesEpics };
