import { Todo, UpdatedTitle } from '../../types/todosType';

export const setTodo = (value: string) => {
  return {
    type: 'SET_TODO',
    payload: value,
  };
};

export const changeValue = (value: string) => {
  return {
    type: 'CHANGE_VALUE',
    payload: value,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

export const updateTodoTitle = (newData: UpdatedTitle) => {
  return {
    type: 'UPDATE_TODO_TITLE',
    payload: newData,
  };
};

export const editClick = (id: number) => {
  return {
    type: 'EDIT_CLICK',
    payload: id,
  };
};

export const setIsCompleted = (todos: Todo[]) => {
  return {
    type: 'SET_IS_COMPLETED',
    payload: todos,
  };
};

export const setFilter = (value: string) => {
  return {
    type: 'SET_FILTER',
    payload: value,
  };
};

export const completeTodo = (id: number) => {
  return {
    type: 'COMPLETE_TODO',
    payload: id,
  };
};
