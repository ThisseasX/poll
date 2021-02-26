import { timer } from 'rxjs';

import {
  switchMap,
  mapTo,
  startWith,
  takeUntil,
} from 'rxjs/operators';

import { ofType, combineEpics } from 'redux-observable';

import {
  copyToClipboard,
  openClipboardTooltip,
  closeClipboardTooltip,
} from 'models/ui';

const copyToClipboardEpic = action$ =>
  action$.pipe(
    ofType(copyToClipboard),
    switchMap(() =>
      timer(1000).pipe(
        mapTo(closeClipboardTooltip()),
        startWith(openClipboardTooltip()),
        takeUntil(action$.pipe(ofType(closeClipboardTooltip))),
      ),
    ),
  );

const uiEpics = combineEpics(copyToClipboardEpic);

export { uiEpics };
