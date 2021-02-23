import { useState, useCallback } from 'react';

const withOpenClose = WrappedComponent => props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(event => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <WrappedComponent
      {...props}
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export { withOpenClose };
