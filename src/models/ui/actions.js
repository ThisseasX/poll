import { namespaceActionCreator } from 'helpers';
import { uiSlice } from './slice';

const {
  startCall,
  endCall,
  openClipboardTooltip,
  closeClipboardTooltip,
} = uiSlice.actions;

const createNamespacedAction = namespaceActionCreator('ui');

const copyToClipboard = createNamespacedAction('copyToClipboard');

export {
  startCall,
  endCall,
  openClipboardTooltip,
  closeClipboardTooltip,
  copyToClipboard,
};
