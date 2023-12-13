import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slices/token';
import firstNameReducer from '../slices/firstName';
import lastNameReducer from '../slices/lastName';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
  },
});
