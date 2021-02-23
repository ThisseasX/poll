import { connect } from 'react-redux';
import { has, pickBy, negate, mapValues } from 'lodash/fp';

const isAction = has('type');

const withModelProps = props => WrappedComponent => {
  const actionProps = pickBy(isAction, props);
  const stateProps = pickBy(negate(isAction), props);

  const mapStateToProps = state =>
    mapValues(selector => selector(state), stateProps);

  return connect(mapStateToProps, actionProps)(WrappedComponent);
};

export { withModelProps };
