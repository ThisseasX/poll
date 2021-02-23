const getProgress = (votes, maxVote) => {
  if (votes === 0 || maxVote === 0) return 0;

  return (votes / maxVote) * 100;
};

export { getProgress };
