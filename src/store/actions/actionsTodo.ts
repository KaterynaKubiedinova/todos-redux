import { TodosActionTypes } from '../../types/todosType';
import { Todo } from '../../types/todosType';

export const setTodo = (value: [string, number]) => {
  return {
    type: TodosActionTypes.SET_TODO,
    payload: value,
  };
};

export const changeValue = (value: string) => {
  return {
    type: TodosActionTypes.CHANGE_VALUE,
    payload: value,
  };
};

export const deleteTodo = (todos: Todo[]) => {
  return {
    type: TodosActionTypes.DELETE_TODO,
    payload: todos,
  };
};

export const updateTodoTitle = (todos: Todo[]) => {
  return {
    type: TodosActionTypes.UPDATE_TODO_TITLE,
    payload: todos,
  };
};

export const editClick = (todos: Todo[]) => {
  return {
    type: TodosActionTypes.EDIT_CLICK,
    payload: todos,
  };
};

export const setIsCompleted = (todos: Todo[]) => {
  return {
    type: TodosActionTypes.SET_IS_COMPLETED,
    payload: todos,
  };
};

export const setFilter = (value: string) => {
  return {
    type: TodosActionTypes.SET_FILTER,
    payload: value,
  };
};

export const completeTodo = (todos: Todo[]) => {
  return {
    type: TodosActionTypes.COMPLETE_TODO,
    payload: todos,
  };
};
