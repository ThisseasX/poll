import { combineEpics } from 'redux-observable';
import { makeRequestEpic } from 'helpers';
import { setPollSubjectEffect } from 'models/app';
import { setPollSubjectRequest } from 'services';

const setPollSubjectEffectEpic = makeRequestEpic(
  setPollSubjectEffect,
  setPollSubjectRequest,
);

const appEpics = combineEpics(setPollSubjectEffectEpic);

export { appEpics };
