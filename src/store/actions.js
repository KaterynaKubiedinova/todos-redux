export const setTodo = (todo) => {
  return {
    type: 'SET_TODO',
    payload: todo,
  };
};

export const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name,
  };
};

export const changeValue = (value) => {
  return {
    type: 'CHANGE_VALUE',
    payload: value,
  };
};

export const deleteTodo = (todos) => {
  return {
    type: 'DELETE_TODO',
    payload: todos,
  };
};

export const updateTodo = (newData) => {
  return {
    type: 'UPDATE_TODO',
    payload: newData,
  };
};

export const editClick = (id) => {
  return {
    type: 'EDIT_CLICK',
    payload: id,
  };
};

export const setIsCompleted = (todos) => {
  return {
    type: 'SET_IS_COMPLETED',
    payload: todos,
  };
};

export const setFilter = (value) => {
  return {
    type: 'SET_FILTER',
    payload: value,
  };
};
