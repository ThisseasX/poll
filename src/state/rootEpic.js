import { combineEpics } from 'redux-observable';
import { candidatesEpics } from 'models/candidates';
import { votesEpics } from 'models/votes';
import { uiEpics } from 'models/ui';
import { appEpics } from 'models/app';

const rootEpic = combineEpics(
  candidatesEpics,
  votesEpics,
  uiEpics,
  appEpics,
);

export default rootEpic;
