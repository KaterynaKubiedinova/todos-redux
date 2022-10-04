import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todosReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  todo: todosReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
