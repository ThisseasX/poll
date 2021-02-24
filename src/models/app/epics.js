import { combineEpics } from 'redux-observable';
import { setPollSubjectEffect } from 'models/app';
import { setPollSubjectRequest } from 'services';
import { makeRequest } from 'helpers';

const setPollSubjectEffectEpic = makeRequest(setPollSubjectEffect, setPollSubjectRequest)
const appEpics = combineEpics(setPollSubjectEffectEpic);

export { appEpics };
