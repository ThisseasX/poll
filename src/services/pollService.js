import firebase from 'firebase';

const db = firebase.database();

const setPollSubjectRequest = ({ payload }, { app: { pollId } }) =>
  db.ref(`${pollId}/subject`).set(payload);

const addCandidateRequest = ({ payload }, { app: { pollId } }) =>
  db.ref(`${pollId}/candidates`).push(payload);

const removeCandidateRequest = ({ payload }, { app: { pollId } }) =>
  db.ref(`${pollId}/candidates/${payload}`).remove();

const toggleVoteRequest = async (
  { payload: candidateId },
  { app: { pollId, userId } },
) => {
  const found = await new Promise(resolve =>
    db
      .ref(`${pollId}/votes`)
      .orderByChild('candidateId')
      .equalTo(candidateId)
      .once('value', querySnap => {
        querySnap.forEach(snap => {
          const vote = snap.val();

          if (vote.userId === userId) {
            snap.ref.remove();
            resolve(true);
            return true;
          }
        });

        resolve(false);
      }),
  );

  if (!found) {
    return db.ref(`${pollId}/votes`).push({ candidateId, userId });
  }
};

const resetVotesRequest = (_, { app: { pollId } }) =>
  db.ref(`${pollId}/votes`).remove();

export {
  setPollSubjectRequest,
  addCandidateRequest,
  removeCandidateRequest,
  toggleVoteRequest,
  resetVotesRequest,
};
