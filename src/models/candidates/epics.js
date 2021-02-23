import {
  mergeMap,
  ignoreElements,
  withLatestFrom,
} from 'rxjs/operators';

import { combineEpics, ofType } from 'redux-observable';
import { spread } from 'lodash/fp';

import {
  addCandidateEffect,
  removeCandidateEffect,
} from 'models/candidates';

import {
  addCandidateRequest,
  removeCandidateRequest,
} from 'services';

const addCandidateEffectEpic = (action$, state$) =>
  action$.pipe(
    ofType(addCandidateEffect),
    withLatestFrom(state$),
    mergeMap(spread(addCandidateRequest)),
    ignoreElements(),
  );

const removeCandidateEffectEpic = (action$, state$) =>
  action$.pipe(
    ofType(removeCandidateEffect),
    withLatestFrom(state$),
    mergeMap(spread(removeCandidateRequest)),
    ignoreElements(),
  );

const candidatesEpics = combineEpics(
  addCandidateEffectEpic,
  removeCandidateEffectEpic,
);

export { candidatesEpics };
