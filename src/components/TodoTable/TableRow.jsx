import React from 'react';
import './style.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

function isCompleted(completed) {
  return completed ? 'line-through' : 'none';
}

export default function TableRow({
  todo,
  index,
  onDelete,
  onEdit,
  onTodo,
  onSubmit,
  onChangeTitle,
}) {
  const editClicked = todo.editClicked;

  function onEditBtn(e) {
    e.stopPropagation();
    onEdit(todo.id);
  }

  function onDeleteBtn(e) {
    e.stopPropagation();
    onDelete(todo.id);
  }

  function onChange(e) {
    e.stopPropagation();
    const value = e.target.value;
    onChangeTitle(todo, value);
  }

  function onSubmitClick(e) {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(todo.id);
  }

  function onTodoClick(e) {
    e.stopPropagation();
    onTodo(todo);
  }

  return (
    <tr className='row'>
      <td>{index + 1}</td>
      <td
        onClick={onTodoClick}
        style={{ textDecoration: isCompleted(todo.completed) }}
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
}
