import { namespaceActionCreator } from 'helpers';
import { appSlice } from './slice';

const { setUserId, setPollId, setPollSubject } = appSlice.actions;

const createNamespacedAction = namespaceActionCreator('app');

const setPollSubjectEffect = createNamespacedAction(
  'setPollSubject/effect',
);

export { setUserId, setPollId, setPollSubject, setPollSubjectEffect };
