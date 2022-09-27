import React from 'react';
import { useSelector } from 'react-redux';
import {
  completedBtnStyle,
  notCompletedBtnStyle,
} from '../../functions/styleFunc';
import './style.css';

export default function FilterTodos({
  filterCompletedBtn,
  filterNotCompletedBtn,
}) {
  const filterCompleted = useSelector((state) => state.filterCompleted);
  const isCompleted = useSelector((state) => state.isCompleted);
  const { notCompleted, alreadyCompleted } = isCompleted;

  function completedBtn(e) {
    e.stopPropagation();
    if (alreadyCompleted.length) {
      filterCompletedBtn();
    }
  }

  function notCompletedBtn(e) {
    e.stopPropagation();
    if (notCompleted.length) {
      filterNotCompletedBtn();
    }
  }

  return (
    <div className='filter'>
      <div className='filter-buttons'>
        <button
          onClick={completedBtn}
          style={completedBtnStyle(filterCompleted)}
        >
          COMPLETED
        </button>
        <button
          onClick={notCompletedBtn}
          style={notCompletedBtnStyle(filterCompleted)}
        >
          NOT COMPLETED
        </button>
      </div>
      <div style={{ width: '100%' }}>
        {filterCompleted === 'completed' ? (
          <div className='filtred-todos'>
            {alreadyCompleted.map((todo, index) => (
              <span key={todo.id}>
                {index + 1}. {todo.title}
              </span>
            ))}
          </div>
        ) : null}
        {filterCompleted === 'not completed' ? (
          <div className='filtred-todos'>
            {notCompleted.map((todo, index) => (
              <span key={todo.id}>
                {index + 1}. {todo.title}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
