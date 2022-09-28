export interface Todo {
  title: string;
  completed: boolean;
  editClicked: boolean;
  id: number;
}

export interface UpdatedTitle {
  id: number;
  title: string;
}

export interface TodosState {
  name: string;
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
  SET_NAME = 'SET_NAME',
  CHANGE_VALUE = 'CHANGE_VALUE',
  SET_TODO = 'SET_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE',
  EDIT_CLICK = 'EDIT_CLICK',
  SET_IS_COMPLETED = 'SET_IS_COMPLETED',
  SET_FILTER = 'SET_FILTER',
  COMPLETE_TODO = 'COMPLETE_TODO',
}

interface SetNameAction {
  type: TodosActionTypes.SET_NAME;
  payload: string;
}

interface ChangeValueAction {
  type: TodosActionTypes.CHANGE_VALUE;
  payload: string;
}

interface SetTodoAction {
  type: TodosActionTypes.SET_TODO;
  payload: string;
}

interface DeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO;
  payload: number;
}

interface UpdateTodoTitleAction {
  type: TodosActionTypes.UPDATE_TODO_TITLE;
  payload: UpdatedTitle;
}

interface EditClickAction {
  type: TodosActionTypes.EDIT_CLICK;
  payload: number;
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
  payload: number;
}

export type TodosAction =
  | SetNameAction
  | ChangeValueAction
  | SetTodoAction
  | DeleteTodoAction
  | UpdateTodoTitleAction
  | EditClickAction
  | SetIsCompletedAction
  | SetFilterAction
  | CompleteTodoAction;
