import { combineEpics } from 'redux-observable';
import { makeRequest } from 'helpers';
import { toggleVoteEffect, resetVotesEffect } from 'models/votes';
import { toggleVoteRequest, resetVotesRequest } from 'services';

const toggleVoteEffectEpic = makeRequest(
  toggleVoteEffect,
  toggleVoteRequest,
);

const resetVotesEffectEpic = makeRequest(
  resetVotesEffect,
  resetVotesRequest,
);

const votesEpics = combineEpics(
  toggleVoteEffectEpic,
  resetVotesEffectEpic,
);

export { votesEpics };
