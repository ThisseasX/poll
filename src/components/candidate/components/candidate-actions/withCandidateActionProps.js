import { useCallback } from 'react';

const withCandidateActionProps = WrappedComponent => props => {
  const { candidateId, toggleVoteEffect, removeCandidateEffect } =
    props;

  const handleToggleVote = useCallback(() => {
    toggleVoteEffect(candidateId);
  }, [toggleVoteEffect, candidateId]);

  const handleRemoveCandidate = useCallback(() => {
    removeCandidateEffect(candidateId);
  }, [removeCandidateEffect, candidateId]);

  return (
    <WrappedComponent
      {...props}
      handleToggleVote={handleToggleVote}
      handleRemoveCandidate={handleRemoveCandidate}
    />
  );
};

export { withCandidateActionProps };
