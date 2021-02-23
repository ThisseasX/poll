import { createSlice } from '@reduxjs/toolkit';
import { candidatesAdapter } from './adapter';

const reducers = {
  addCandidate: candidatesAdapter.addOne,
  addCandidates: candidatesAdapter.addMany,
  removeCandidate: candidatesAdapter.removeOne,
  removeCandidates: candidatesAdapter.removeMany,
};

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState: candidatesAdapter.getInitialState(),
  reducers,
});

export { candidatesSlice };
