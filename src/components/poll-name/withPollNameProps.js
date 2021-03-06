import { useState, useCallback } from 'react';

const withPollNameProps = WrappedComponent => props => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <WrappedComponent
      {...props}
      isEditing={isEditing}
      handleEdit={handleEdit}
    />
  );
};

export { withPollNameProps };
