import { timer } from 'rxjs';
import { switchMap, mapTo, startWith } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import {
  copyToClipboard,
  setIsClipboardTooltipOpen,
} from 'models/ui';

const copyToClipboardEpic = action$ =>
  action$.pipe(
    ofType(copyToClipboard),
    switchMap(() =>
      timer(1000).pipe(
        mapTo(setIsClipboardTooltipOpen(false)),
        startWith(setIsClipboardTooltipOpen(true)),
      ),
    ),
  );

const uiEpics = combineEpics(copyToClipboardEpic);

export { uiEpics };
