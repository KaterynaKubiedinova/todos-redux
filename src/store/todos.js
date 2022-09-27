const initialState = {
  name: '',
  todos: [],
  newValue: '',
  value: '',
  isCompleted: {
    notCompleted: [],
    alreadyCompleted: [],
  },
  filterCompleted: '',
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: payload,
      };

    case 'SET_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: state.value,
            completed: false,
            editClicked: false,
            id: Date.now(),
          },
        ],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: payload,
      };
    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    case 'EDIT_CLICK':
      const newTodos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, editClicked: !todo.editClicked } : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
    case 'SET_IS_COMPLETED':
      const notCompletedArr = payload.filter(
        (todo) => todo.completed === false
      );
      const completedArr = payload.filter((todo) => todo.completed === true);
      return {
        ...state,
        isCompleted: {
          notCompleted: notCompletedArr,
          alreadyCompleted: completedArr,
        },
      };
    case 'SET_FILTER':
      return {
        ...state,
        filterCompleted: payload,
      };
    default:
      return state;
  }
};
