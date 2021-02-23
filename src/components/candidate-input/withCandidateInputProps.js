import { useState, useCallback } from 'react';

const withCandidateInputProps = WrappedComponent => props => {
  const { addCandidateEffect } = props;

  const [input, setInput] = useState('');

  const handleInput = useCallback(e => {
    setInput(e.target.value.slice(0, 200));
  }, []);

  const handleAdd = useCallback(() => {
    addCandidateEffect({ title: input });
    setInput('');
  }, [addCandidateEffect, input]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Enter') {
        handleAdd();
      }
    },
    [handleAdd],
  );

  return (
    <WrappedComponent
      {...props}
      input={input}
      handleInput={handleInput}
      handleAdd={handleAdd}
      handleKeyDown={handleKeyDown}
    />
  );
};

export { withCandidateInputProps };
