import { namespaceActionCreator } from 'helpers';
import { uiSlice } from './slice';

const {
  startCall,
  endCall,
  setIsClipboardTooltipOpen,
} = uiSlice.actions;

const createNamespacedAction = namespaceActionCreator('ui');

const copyToClipboard = createNamespacedAction('copyToClipboard');

export {
  startCall,
  endCall,
  setIsClipboardTooltipOpen,
  copyToClipboard,
};
