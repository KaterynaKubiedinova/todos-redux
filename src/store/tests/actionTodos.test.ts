/** @format */

import { TodosActionTypes, Todo } from '../../types/todosType';
import {
  setTodo,
  changeValue,
  editClick,
  deleteTodo,
  updateTodoTitle,
  setIsCompleted,
  setFilter,
  completeTodo,
} from './../actions/actionsTodo';

describe('tests actions todos', () => {
  it('setTodo', () => {
    const value: [string, number] = ['sdath', Date.now()];

    expect(setTodo(value)).toEqual({
      type: TodosActionTypes.SET_TODO,
      payload: value,
    });
  });

  it('changeValue', () => {
    const value: string = 'xgfsb';

    expect(changeValue(value)).toEqual({
      type: TodosActionTypes.CHANGE_VALUE,
      payload: value,
    });
  });

  it('deleteTodo', () => {
    const todos: Todo[] = [
      { title: 'gns', completed: true, editClicked: false, id: 555 },
    ];

    expect(deleteTodo(todos)).toEqual({
      type: TodosActionTypes.DELETE_TODO,
      payload: todos,
    });
  });

  it('updateTodoTitle', () => {
    const todos: Todo[] = [
      { title: 'gns', completed: true, editClicked: false, id: 555 },
    ];

    expect(updateTodoTitle(todos)).toEqual({
      type: TodosActionTypes.UPDATE_TODO_TITLE,
      payload: todos,
    });
  });

  it('editClick', () => {
    const todos: Todo[] = [
      { title: 'gns', completed: true, editClicked: false, id: 555 },
    ];

    expect(editClick(todos)).toEqual({
      type: TodosActionTypes.EDIT_CLICK,
      payload: todos,
    });
  });

  it('setIsCompleted', () => {
    const todos: Todo[] = [
      { title: 'gns', completed: true, editClicked: false, id: 555 },
    ];

    expect(setIsCompleted(todos)).toEqual({
      type: TodosActionTypes.SET_IS_COMPLETED,
      payload: todos,
    });
  });

  it('setFilter', () => {
    const value: string = 'completed';

    expect(setFilter(value)).toEqual({
      type: TodosActionTypes.SET_FILTER,
      payload: value,
    });
  });

  it('completeTodo', () => {
    const todos: Todo[] = [
      { title: 'gns', completed: true, editClicked: false, id: 555 },
    ];

    expect(completeTodo(todos)).toEqual({
      type: TodosActionTypes.COMPLETE_TODO,
      payload: todos,
    });
  });
});
