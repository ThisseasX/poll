import { createSlice } from '@reduxjs/toolkit';
import { votesAdapter } from './adapter';

const reducers = {
  addVote: votesAdapter.addOne,
  addVotes: votesAdapter.addMany,
  removeVote: votesAdapter.removeOne,
  removeVotes: votesAdapter.removeMany,
};

const votesSlice = createSlice({
  name: 'votes',
  initialState: votesAdapter.getInitialState(),
  reducers,
});

export { votesSlice };
