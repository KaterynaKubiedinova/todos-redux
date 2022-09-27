import { createStore } from 'redux';
import { todosReducer } from './todos';

export const store = createStore(todosReducer);
