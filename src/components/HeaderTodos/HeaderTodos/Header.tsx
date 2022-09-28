import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setIsCompleted } from '../../../store/actions/actionsTodo';
import './style.css';

export default function Header() {
  const name = useTypedSelector((state) => state.user.name);
  const { todos, isCompleted } = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { notCompleted } = isCompleted;

  useEffect(() => {
    dispatch(setIsCompleted(todos));
  }, [todos]);

  return (
    <div className='header'>
      <h1>
        {name} need to do {notCompleted.length} tasks
      </h1>
    </div>
  );
}
