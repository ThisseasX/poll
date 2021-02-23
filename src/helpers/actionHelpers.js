import { createAction } from '@reduxjs/toolkit';

const namespaceActionCreator = namespace => actionName =>
  createAction(`${namespace}/${actionName}`);

export { namespaceActionCreator };
