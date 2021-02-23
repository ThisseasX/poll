import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  pollId: null,
  pollSubject: null,
};

const reducers = {
  setUserId: (state, { payload }) => {
    state.userId = payload;
  },
  setPollId: (state, { payload }) => {
    state.pollId = payload;
  },
  setPollSubject: (state, { payload }) => {
    state.pollSubject = payload;
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export { appSlice };
