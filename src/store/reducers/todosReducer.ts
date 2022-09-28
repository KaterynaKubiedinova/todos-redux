import {
  TodosAction,
  TodosActionTypes,
  TodosState,
} from '../../types/todosType';

const initialState: TodosState = {
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

export const todosReducer = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case TodosActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case TodosActionTypes.CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      };

    case TodosActionTypes.SET_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
            completed: false,
            editClicked: false,
            id: Date.now(),
          },
        ],
      };
    case TodosActionTypes.DELETE_TODO:
      const deletedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: deletedTodos,
      };
    case TodosActionTypes.UPDATE_TODO_TITLE:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    case TodosActionTypes.COMPLETE_TODO:
      const completeTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todos: completeTodos,
      };
    case TodosActionTypes.EDIT_CLICK:
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, editClicked: !todo.editClicked }
          : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
    case TodosActionTypes.SET_IS_COMPLETED:
      const notCompletedArr = action.payload.filter(
        (todo) => todo.completed === false
      );
      const completedArr = action.payload.filter(
        (todo) => todo.completed === true
      );
      return {
        ...state,
        isCompleted: {
          notCompleted: notCompletedArr,
          alreadyCompleted: completedArr,
        },
      };
    case TodosActionTypes.SET_FILTER:
      return {
        ...state,
        filterCompleted: action.payload,
      };
    default:
      return state;
  }
};
