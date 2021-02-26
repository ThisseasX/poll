import { combineEpics } from 'redux-observable';
import { makeRequestEpic } from 'helpers';

import {
  addCandidateEffect,
  removeCandidateEffect,
} from 'models/candidates';

import {
  addCandidateRequest,
  removeCandidateRequest,
} from 'services';

const addCandidateEffectEpic = makeRequestEpic(
  addCandidateEffect,
  addCandidateRequest,
);

const removeCandidateEffectEpic = makeRequestEpic(
  removeCandidateEffect,
  removeCandidateRequest,
);

const candidatesEpics = combineEpics(
  addCandidateEffectEpic,
  removeCandidateEffectEpic,
);

export { candidatesEpics };
