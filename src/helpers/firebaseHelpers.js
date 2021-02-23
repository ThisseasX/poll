import { flow, identity } from 'lodash/fp';

const snapToValue = snap => snap.val();

const snapToEntity = snap => ({ id: snap.key, ...snap.val() });

const snapToKey = snap => snap.key;

const dispatchTransformedSnap = (
  boundAction,
  transformSnap = identity,
) => snap => flow(transformSnap, boundAction)(snap);

export {
  snapToValue,
  snapToEntity,
  snapToKey,
  dispatchTransformedSnap,
};
