import { useState, useCallback } from 'react';

const withPopoverProps = WrappedComponent => props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <WrappedComponent
      {...props}
      anchorEl={anchorEl}
      handlePopoverOpen={handlePopoverOpen}
      handlePopoverClose={handlePopoverClose}
    />
  );
};

export { withPopoverProps };
