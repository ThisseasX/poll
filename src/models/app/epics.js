import { combineEpics } from 'redux-observable';
import { makeRequest } from 'helpers';
import { setPollSubjectEffect } from 'models/app';
import { setPollSubjectRequest } from 'services';

const setPollSubjectEffectEpic = makeRequest(
  setPollSubjectEffect,
  setPollSubjectRequest,
);

const appEpics = combineEpics(setPollSubjectEffectEpic);

export { appEpics };
