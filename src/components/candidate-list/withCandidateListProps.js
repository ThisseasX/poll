import { useCallback } from 'react';

const withCandidateListProps = WrappedComponent => props => {
  const { resetVotesEffect } = props;

  const handleReset = useCallback(() => {
    resetVotesEffect();
  }, [resetVotesEffect]);

  return <WrappedComponent {...props} handleReset={handleReset} />;
};

export { withCandidateListProps };
