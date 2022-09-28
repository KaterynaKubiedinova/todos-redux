import React from 'react';
import './style.css';
import TableRow from './TableRow';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TodoTable: React.FC<{
  onDelete: Function;
  onSubmit: Function;
  onTodo: Function;
  onEdit: Function;
  onChangeTitle: Function;
}> = ({ onDelete, onSubmit, onTodo, onEdit, onChangeTitle }) => {
  const todos = useTypedSelector((state) => state.todo.todos);

  return (
    <>
      {todos.length ? (
        <table className='todo-table'>
          <colgroup>
            <col style={{ width: '5%' }} />
            <col style={{ width: '75%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <tbody>
            {todos.map((todo, index) => (
              <TableRow
                key={todo.id}
                index={index}
                todo={todo}
                onDelete={onDelete}
                onSubmit={onSubmit}
                onTodo={onTodo}
                onEdit={onEdit}
                onChangeTitle={onChangeTitle}
              />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default TodoTable;
