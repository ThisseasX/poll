import { spread } from 'lodash';

import {
  mergeMap,
  withLatestFrom,
  ignoreElements,
} from 'rxjs/operators';

import { ofType, combineEpics } from 'redux-observable';
import { setPollSubjectEffect } from 'models/app';
import { setPollSubjectRequest } from 'services';

const setPollSubjectEffectEpic = (action$, state$) =>
  action$.pipe(
    ofType(setPollSubjectEffect),
    withLatestFrom(state$),
    mergeMap(spread(setPollSubjectRequest)),
    ignoreElements(),
  );

const appEpics = combineEpics(setPollSubjectEffectEpic);

export { appEpics };
