import {
  TodosAction,
  TodosActionTypes,
  TodosState,
} from '../../types/todosType';

export const initialState: TodosState = {
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
            title: action.payload[0],
            completed: false,
            editClicked: false,
            id: action.payload[1],
          },
        ],
      };
    case TodosActionTypes.DELETE_TODO:
      return {
        ...state,
        todos:action.payload,
      };
    case TodosActionTypes.UPDATE_TODO_TITLE:
      return {
        ...state,
        todos: action.payload,
      };
    case TodosActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case TodosActionTypes.EDIT_CLICK:
      return {
        ...state,
        todos: action.payload,
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
