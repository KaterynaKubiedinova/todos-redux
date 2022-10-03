/** @format */

import { TodosActionTypes, TodosAction } from '../../types/todosType';
import { initialState, todosReducer } from '../reducers/todosReducer';

describe('tests todo reducer', () => {
  it('CHANGE_VALUE', () => {
    const action: TodosAction = {
      type: TodosActionTypes.CHANGE_VALUE,
      payload: 'Kate',
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      value: action.payload,
    });
  });

  it('SET_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_TODO,
      payload: ['Kate', Date.now()],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: [
        ...initialState.todos,
        {
          title: action.payload[0],
          completed: false,
          editClicked: false,
          id: action.payload[1],
        },
      ],
    });
  });

  it('DELETE_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.DELETE_TODO,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 8792,
        },
      ],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  it('UPDATE_TODO_TITLE', () => {
    const action: TodosAction = {
      type: TodosActionTypes.UPDATE_TODO_TITLE,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 8792,
        },
      ],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  it('EDIT_CLICK', () => {
    const action: TodosAction = {
      type: TodosActionTypes.EDIT_CLICK,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 8792,
        },
      ],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });

  it('SET_IS_COMPLETED', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_IS_COMPLETED,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 8792,
        },
        {
          title: 'ffflkjhg',
          completed: true,
          editClicked: true,
          id: 879985,
        },
        {
          title: 'ffghff',
          completed: false,
          editClicked: true,
          id: 8792,
        },
      ],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      isCompleted: {
        notCompleted: [action.payload[2]],
        alreadyCompleted: [action.payload[0], action.payload[1]],
      },
    });
  });

  it('SET_FILTER', () => {
    const action: TodosAction = {
      type: TodosActionTypes.SET_FILTER,
      payload: 'completed',
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      filterCompleted: action.payload,
    });
  });

  it('COMPLETE_TODO', () => {
    const action: TodosAction = {
      type: TodosActionTypes.COMPLETE_TODO,
      payload: [
        {
          title: 'fff',
          completed: true,
          editClicked: true,
          id: 8792,
        },
      ],
    };

    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todos: action.payload,
    });
  });
});
