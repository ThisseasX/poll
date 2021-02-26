import { combineEpics } from 'redux-observable';
import { makeRequestEpic } from 'helpers';
import { toggleVoteEffect, resetVotesEffect } from 'models/votes';
import { toggleVoteRequest, resetVotesRequest } from 'services';

const toggleVoteEffectEpic = makeRequestEpic(
  toggleVoteEffect,
  toggleVoteRequest,
);

const resetVotesEffectEpic = makeRequestEpic(
  resetVotesEffect,
  resetVotesRequest,
);

const votesEpics = combineEpics(
  toggleVoteEffectEpic,
  resetVotesEffectEpic,
);

export { votesEpics };
