import { combineEpics } from 'redux-observable';
import { makeRequest } from 'helpers';

import {
  addCandidateEffect,
  removeCandidateEffect,
} from 'models/candidates';

import {
  addCandidateRequest,
  removeCandidateRequest,
} from 'services';

const addCandidateEffectEpic = makeRequest(
  addCandidateEffect,
  addCandidateRequest,
);

const removeCandidateEffectEpic = makeRequest(
  removeCandidateEffect,
  removeCandidateRequest,
);

const candidatesEpics = combineEpics(
  addCandidateEffectEpic,
  removeCandidateEffectEpic,
);

export { candidatesEpics };
