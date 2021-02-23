import { namespaceActionCreator } from 'helpers';
import { candidatesSlice } from './slice';

const {
  addCandidate,
  addCandidates,
  removeCandidate,
  removeCandidates,
} = candidatesSlice.actions;

const createNamespacedAction = namespaceActionCreator('candidates');

const addCandidateEffect = createNamespacedAction(
  'addCandidate/effect',
);
const removeCandidateEffect = createNamespacedAction(
  'removeCandidate/effect',
);

export {
  addCandidate,
  addCandidates,
  removeCandidate,
  removeCandidates,
  addCandidateEffect,
  removeCandidateEffect,
};
