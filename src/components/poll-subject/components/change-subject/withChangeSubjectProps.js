import { useState, useCallback, useEffect } from 'react';

const withChangeSubjectProps = WrappedComponent => props => {
  const { pollSubject, setPollSubjectEffect, handleEditEnd } = props;

  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(pollSubject || '');
  }, [pollSubject]);

  const handleInput = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const handleChange = useCallback(() => {
    handleEditEnd();
    setPollSubjectEffect(input);
  }, [handleEditEnd, setPollSubjectEffect, input]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Enter') {
        handleChange();
      }
    },
    [handleChange],
  );

  return (
    <WrappedComponent
      {...props}
      input={input}
      handleInput={handleInput}
      handleKeyDown={handleKeyDown}
      handleChange={handleChange}
    />
  );
};

export { withChangeSubjectProps };
