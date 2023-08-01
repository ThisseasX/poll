import firebase from 'firebase/app';
import * as candidatesActions from 'models/candidates/actions';
import * as votesActions from 'models/votes/actions';
import * as appActions from 'models/app/actions';
import { bindActionCreators } from 'redux';

import {
  snapToValue,
  snapToEntity,
  snapToKey,
  createActionBuffer,
  dispatchTransformedSnap,
} from 'helpers';

import { combineStoreSubscriptions } from 'state';

const db = firebase.database();

const pollSubjectSubscription = (store, { pollId }) => {
  const { setPollSubject } = bindActionCreators(
    appActions,
    store.dispatch,
  );

  const pollSubjectRef = db.ref(`${pollId}/subject`);

  const valueChanged = dispatchTransformedSnap(
    setPollSubject,
    snapToValue,
  );

  pollSubjectRef.on('value', valueChanged);

  return () => {
    pollSubjectRef.off('value', valueChanged);
  };
};

const candidatesSubscription = (store, { pollId }) => {
  const { addCandidates, removeCandidates } = bindActionCreators(
    candidatesActions,
    store.dispatch,
  );

  const candidatesRef = db.ref(`${pollId}/candidates`);

  const childAdded = createActionBuffer(addCandidates, snapToEntity);
  const childRemoved = createActionBuffer(
    removeCandidates,
    snapToKey,
  );

  candidatesRef.on('child_added', childAdded);
  candidatesRef.on('child_removed', childRemoved);

  return () => {
    candidatesRef.off('child_added', childAdded);
    candidatesRef.off('child_removed', childRemoved);
  };
};

const votesSubscription = (store, { pollId }) => {
  const { addVotes, removeVotes } = bindActionCreators(
    votesActions,
    store.dispatch,
  );

  const votesRef = db.ref(`${pollId}/votes`);

  const childAdded = createActionBuffer(addVotes, snapToEntity);
  const childRemoved = createActionBuffer(removeVotes, snapToKey);

  votesRef.on('child_added', childAdded);
  votesRef.on('child_removed', childRemoved);

  return () => {
    votesRef.off('child_added', childAdded);
    votesRef.off('child_removed', childRemoved);
  };
};

const subscribe = combineStoreSubscriptions(
  pollSubjectSubscription,
  candidatesSubscription,
  votesSubscription,
);

export { subscribe };
