import { connect } from 'react-redux';
import { has, pickBy, negate, mapValues } from 'lodash/fp';

const isAction = has('type');
const callSelf = fn => fn();

const withModelPropsMemo = (
  props,
  selectorCreators,
) => WrappedComponent => {
  const actionProps = pickBy(isAction, props);
  const stateProps = pickBy(negate(isAction), props);

  const mapStateToProps = selectorCreators
    ? () => {
        const selectors = mapValues(callSelf, selectorCreators);

        return (state, props) =>
          mapValues(selector => selector(state, props), {
            ...stateProps,
            ...selectors,
          });
      }
    : // Default behaviour
      state => mapValues(selector => selector(state), stateProps);

  return connect(mapStateToProps, actionProps)(WrappedComponent);
};

export { withModelPropsMemo };
