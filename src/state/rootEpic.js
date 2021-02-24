import { combineEpics } from 'redux-observable';
import { appEpics } from 'models/app';
import { uiEpics } from 'models/ui';
import { candidatesEpics } from 'models/candidates';
import { votesEpics } from 'models/votes';

const rootEpic = combineEpics(
  appEpics,
  uiEpics,
  candidatesEpics,
  votesEpics,
);

export default rootEpic;
