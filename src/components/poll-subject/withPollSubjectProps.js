import { useState, useCallback } from 'react';

const withPollSubjectProps = WrappedComponent => props => {
  const [isEditingSubject, setIsEditingSubject] = useState(false);

  const handleEditStart = useCallback(() => {
    setIsEditingSubject(true);
  }, []);

  const handleEditEnd = useCallback(() => {
    setIsEditingSubject(false);
  }, []);

  return (
    <WrappedComponent
      {...props}
      isEditingSubject={isEditingSubject}
      handleEditStart={handleEditStart}
      handleEditEnd={handleEditEnd}
    />
  );
};

export { withPollSubjectProps };
