/** @format */

import React, { ChangeEvent, MouseEvent } from 'react';
import './style.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { Todo } from '../../types/todosType';
import { isCompleted } from '../../functions/styleFunc';
import { completeTodo } from '../../store/actions/actionsTodo';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TableRow: React.FC<{
  todo: Todo;
  index: number;
  onDelete: Function;
  onEdit: Function;
  onTodo: Function;
  onSubmit: Function;
  onChangeTitle: Function;
}> = ({ todo, index, onDelete, onEdit, onTodo, onSubmit, onChangeTitle }) => {
  const editClicked = todo.editClicked;
  const { todos } = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();

  function onEditBtn(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    onEdit(todo.id);
  }

  function onDeleteBtn(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    onDelete(todo.id);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    e.stopPropagation();
    const value = e.target.value;
    onChangeTitle(todo.id, value);
  }

  function onSubmitClick(e: ChangeEvent<HTMLFormElement>): void {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(todo.id);
  }

  function onTodoClick(e: MouseEvent): void {
    e.stopPropagation();
    onTodo(todo);
  }

  return (
    <tr className='row'>
      <td>{index + 1}</td>
      <td
        onClick={onTodoClick}
        style={{
          textDecoration: isCompleted(todo.completed),
          cursor: 'pointer',
        }}
      >
        {editClicked ? (
          <form onSubmit={onSubmitClick}>
            <input
              type='text'
              onChange={onChange}
              value={todo.title}
              autoFocus
            />
          </form>
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        <button onClick={onEditBtn}>
          <AiOutlineEdit />
        </button>
      </td>
      <td>
        <button onClick={onDeleteBtn}>
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
