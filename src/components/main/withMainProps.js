import { useEffect } from 'react';
import { limitPollId } from 'helpers';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useParams } from 'react-router-dom';
import { subscribe } from './subscriptions';

const withMainProps = WrappedComponent => props => {
  const { setUserId, setPollId } = props;

  const { pollId } = useParams();

  useEffect(() => {
    setPollId(limitPollId(pollId));
  }, [setPollId, pollId]);

  useEffect(
    () =>
      (async () => {
        const fingerprint = await FingerprintJS.load();
        const { visitorId } = await fingerprint.get();

        setUserId(visitorId);
      })(),
    [setUserId],
  );

  useEffect(() => {
    const unsubscribe = subscribe({ pollId });

    return () => {
      unsubscribe();
    };
  }, [pollId]);

  return <WrappedComponent {...props} />;
};

export { withMainProps };
