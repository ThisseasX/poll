import { noop } from 'lodash/fp';

const makeCombineSubscriptions = context => (
  ...subscriptions
) => props => {
  const unsubscribeFunctions = subscriptions.map(sub =>
    sub(context, props),
  );

  return () => {
    unsubscribeFunctions.forEach((unsub = noop) => {
      unsub();
    });
  };
};

export { makeCombineSubscriptions };
