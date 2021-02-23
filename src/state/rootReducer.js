import { appReducer } from 'models/app';
import { uiReducer } from 'models/ui';
import { candidatesReducer } from 'models/candidates';
import { votesReducer } from 'models/votes';

const rootReducer = {
  app: appReducer,
  ui: uiReducer,
  candidates: candidatesReducer,
  votes: votesReducer,
};

export default rootReducer;
