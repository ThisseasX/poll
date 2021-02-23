import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingCalls: {},
  isClipboardTooltipOpen: false,
};

const reducers = {
  startCall: (state, { payload }) => {
    state.loadingCalls[payload] = true;
  },
  endCall: (state, { payload }) => {
    state.loadingCalls[payload] = false;
  },
  setIsClipboardTooltipOpen: (state, { payload }) => {
    state.isClipboardTooltipOpen = payload;
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers,
});

export { uiSlice };
