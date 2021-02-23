import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { limitPollId } from 'helpers';

const withChangePollProps = WrappedComponent => props => {
  const { pollId } = props;

  const [input, setInput] = useState('');
  const history = useHistory();

  useEffect(() => {
    setInput(pollId || '');
  }, [pollId]);

  const handleInput = useCallback(e => {
    const value = e.target.value.toLowerCase();

    const pollId = value.includes('/')
      ? limitPollId(value.slice(value.lastIndexOf('/') + 1))
      : limitPollId(value);

    setInput(pollId);
  }, []);

  const handleRedirect = useCallback(() => {
    history.push(`/${input}`);
  }, [history, input]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Enter') {
        handleRedirect();
      }
    },
    [handleRedirect],
  );

  return (
    <WrappedComponent
      {...props}
      input={input}
      handleInput={handleInput}
      handleRedirect={handleRedirect}
      handleKeyDown={handleKeyDown}
    />
  );
};

export { withChangePollProps };
