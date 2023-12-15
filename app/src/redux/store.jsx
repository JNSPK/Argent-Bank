import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../slices/email';
import passwordReducer from '../slices/password';
import tokenReducer from '../slices/token';
import firstNameReducer from '../slices/firstName';
import lastNameReducer from '../slices/lastName';

export const store = configureStore({
  reducer: {
    email: emailReducer,
    password: passwordReducer,
    token: tokenReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
  },
});
