import { spread } from 'lodash/fp';

import {
  mergeMap,
  withLatestFrom,
  ignoreElements,
} from 'rxjs/operators';

import { ofType, combineEpics } from 'redux-observable';
import { toggleVoteEffect, resetVotesEffect } from 'models/votes';
import { toggleVoteRequest, resetVotesRequest } from 'services';

const toggleVoteEffectEpic = (action$, state$) =>
  action$.pipe(
    ofType(toggleVoteEffect),
    withLatestFrom(state$),
    mergeMap(spread(toggleVoteRequest)),
    ignoreElements(),
  );

const resetVotesEffectEpic = (action$, state$) =>
  action$.pipe(
    ofType(resetVotesEffect),
    withLatestFrom(state$),
    mergeMap(spread(resetVotesRequest)),
    ignoreElements(),
  );

const votesEpics = combineEpics(
  toggleVoteEffectEpic,
  resetVotesEffectEpic,
);

export { votesEpics };
