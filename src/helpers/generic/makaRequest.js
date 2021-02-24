import {spread} from 'lodash/fp';
import {ofType} from 'redux-observable';
import {ignoreElements, mergeMap, withLatestFrom} from 'rxjs/operators';

export const makeRequest = (actionType, actionRequestCallback) => (action$, state$) => action$.pipe(
	ofType(actionType),
	withLatestFrom(state$),
	mergeMap(spread(actionRequestCallback)),
	ignoreElements(),
);