export interface Todo {
  title: string;
  completed: boolean;
  editClicked: boolean;
  id: number;
}

export interface TodosState {
  todos: Todo[];
  newValue: string;
  value: string;
  isCompleted: {
    notCompleted: Todo[];
    alreadyCompleted: Todo[];
  };
  filterCompleted: string;
}

export enum TodosActionTypes {
  CHANGE_VALUE = 'CHANGE_VALUE',
  SET_TODO = 'SET_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE',
  EDIT_CLICK = 'EDIT_CLICK',
  SET_IS_COMPLETED = 'SET_IS_COMPLETED',
  SET_FILTER = 'SET_FILTER',
  COMPLETE_TODO = 'COMPLETE_TODO',
}

interface ChangeValueAction {
  type: TodosActionTypes.CHANGE_VALUE;
  payload: string;
}

interface SetTodoAction {
  type: TodosActionTypes.SET_TODO;
  payload: [string, number];
}

interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: Todo[];
}

interface UpdateTodoTitleAction {
  type: TodosActionTypes.UPDATE_TODO_TITLE;
  payload: Todo[];
}

interface EditClickAction {
  type: TodosActionTypes.EDIT_CLICK;
  payload: Todo[];
}

interface SetIsCompletedAction {
  type: TodosActionTypes.SET_IS_COMPLETED;
  payload: Todo[];
}

interface SetFilterAction {
  type: TodosActionTypes.SET_FILTER;
  payload: string;
}

interface CompleteTodoAction {
  type: TodosActionTypes.COMPLETE_TODO;
  payload: Todo[];
}

export type TodosAction =
  | ChangeValueAction
  | SetTodoAction
  | DeleteTodoAction
  | UpdateTodoTitleAction
  | EditClickAction
  | SetIsCompletedAction
  | SetFilterAction
  | CompleteTodoAction;
