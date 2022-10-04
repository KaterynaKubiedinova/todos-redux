import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/HeaderTodos/HeaderTodos/Header';
import Form from '../../components/Form/Form';
import './style.css';
import {
  setTodo,
  changeValue,
  deleteTodo,
  setIsCompleted,
  editClick,
  updateTodoTitle,
  setFilter,
  completeTodo,
} from '../../store/actions/actionsTodo';
import TodoTable from '../../components/TodoTable/TodoTable';
import FilterTodos from '../../components/Filter/FilterTodos';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../types/todosType';

const TodosPage: React.FC = () => {
  const { todos, value, filterCompleted } = useTypedSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

  function onDelete(id: number): void {
    dispatch(deleteTodo(id));
    dispatch(setIsCompleted(todos));
  }

  function onChange(value: string): void {
    dispatch(changeValue(value));
  }

  function onAdd(): void {
    dispatch(setTodo(value));
    dispatch(changeValue(''));
    dispatch(setIsCompleted(todos));
  }

  function onChangeTitle(todo: Todo, value: string) {
    dispatch(updateTodoTitle({ id: todo.id, title: value }));
    dispatch(setIsCompleted(todos));
  }

  function onSubmit(id: number) {
    dispatch(editClick(id));
    dispatch(setIsCompleted(todos));
  }

  function onTodo(todo: Todo) {
    if (!todo.editClicked) {
      dispatch(completeTodo(todo.id));
      dispatch(setIsCompleted(todos));
    }
  }

  function onEdit(id: number) {
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
};

export default TodosPage;
