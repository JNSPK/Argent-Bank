import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/token';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
