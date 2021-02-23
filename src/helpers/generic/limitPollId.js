const POLL_ID_MAX_LENGTH = 18;

const limitPollId = pollId => pollId.slice(0, POLL_ID_MAX_LENGTH);

export { limitPollId };
