import { useState, useCallback } from 'react';
import { splitPastedText } from './helpers';

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

  const handlePaste = useCallback(
    e => {
      const rawCandidates = e.clipboardData.getData('text');
      const candidates = splitPastedText(rawCandidates);

      if (candidates.length > 1) {
        e.preventDefault();

        candidates.forEach(candidate => {
          addCandidateEffect({ title: candidate });
        });
      }
    },
    [addCandidateEffect],
  );

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
      handlePaste={handlePaste}
      handleKeyDown={handleKeyDown}
    />
  );
};

export { withCandidateInputProps };
