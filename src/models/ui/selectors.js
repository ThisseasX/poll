import { createSelector } from '@reduxjs/toolkit';
import { some } from 'lodash/fp';

const loadingCalls = ({ ui: { loadingCalls } }) => loadingCalls;
const isClipboardTooltipOpen = ({ ui: { isClipboardTooltipOpen } }) =>
  isClipboardTooltipOpen;

const isAppLoading = createSelector(loadingCalls, some(Boolean));

export { loadingCalls, isClipboardTooltipOpen, isAppLoading };
