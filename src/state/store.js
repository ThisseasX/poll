import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    epicMiddleware,
    ...getDefaultMiddleware({ thunk: false }),
  ],
  reducer: rootReducer,
});

epicMiddleware.run(rootEpic);

export default store;
