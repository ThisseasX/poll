import { combineEpics } from 'redux-observable';

import {
  addCandidateEffect,
  removeCandidateEffect,
} from 'models/candidates';

import {
  addCandidateRequest,
  removeCandidateRequest,
} from 'services';
import {makeRequest} from 'helpers';

const addCandidateEffectEpic = makeRequest(addCandidateEffect, addCandidateRequest)

const removeCandidateEffectEpic = makeRequest(removeCandidateEffect, removeCandidateRequest)

const candidatesEpics = combineEpics(
  addCandidateEffectEpic,
  removeCandidateEffectEpic,
);

export { candidatesEpics };
