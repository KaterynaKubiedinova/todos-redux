import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/HeaderTodos/HeaderTodos/Header';
import Form from '../../components/Form/Form';
import './style.css';
import {
  setTodo,
  changeValue,
  deleteTodo,
  setIsCompleted,
  editClick,
  updateTodo,
  setFilter,
} from '../../store/actions';
import TodoTable from '../../components/TodoTable/TodoTable';
import FilterTodos from '../../components/Filter/FilterTodos';

export default function TodosPage() {
  const todos = useSelector((state) => state.todos);
  const value = useSelector((state) => state.value);
  const filterCompleted = useSelector((state) => state.filterCompleted);
  const dispatch = useDispatch();

  function onDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    dispatch(deleteTodo(newTodos));
    dispatch(setIsCompleted(todos));
  }

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    dispatch(changeValue(value));
  }

  function onAdd(e) {
    e.preventDefault();
    dispatch(setTodo());
    dispatch(changeValue(''));
    dispatch(setIsCompleted(todos));
  }

  function onChangeTitle(todo, value) {
    dispatch(updateTodo({ id: todo.id, title: value }));
    dispatch(setIsCompleted(todos));
  }

  function onSubmit(id) {
    dispatch(editClick(id));
    dispatch(setIsCompleted(todos));
  }

  function onTodo(todo) {
    if (!todo.editClicked) {
      dispatch(updateTodo({ id: todo.id, completed: !todo.completed }));
      dispatch(setIsCompleted(todos));
    }
  }

  function onEdit(id) {
    dispatch(editClick(id));
    dispatch(setIsCompleted(todos));
  }

  function filterCompletedBtn() {
    if (filterCompleted === 'completed') {
      dispatch(setFilter(''));
    } else {
      dispatch(setFilter('completed'));
    }
  }

  function filterNotCompletedBtn() {
    if (filterCompleted === 'not completed') {
      dispatch(setFilter(''));
    } else {
      dispatch(setFilter('not completed'));
    }
  }

  return (
    <div className='todos-list'>
      <Header />
      <Form
        text='ADD'
        name='todo'
        value={value}
        onChange={onChange}
        onClickBtn={onAdd}
      />
      <TodoTable
        onChangeTitle={onChangeTitle}
        onDelete={onDelete}
        onTodo={onTodo}
        onSubmit={onSubmit}
        onEdit={onEdit}
      />
      <FilterTodos
        filterCompletedBtn={filterCompletedBtn}
        filterNotCompletedBtn={filterNotCompletedBtn}
      />
    </div>
  );
}
