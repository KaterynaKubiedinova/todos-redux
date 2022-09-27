import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCompleted } from '../../../store/actions';
import './style.css';

export default function Header() {
  const name = useSelector((state) => state.name);
  const todos = useSelector((state) => state.todos);
  const isCompleted = useSelector((state) => state.isCompleted);
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
