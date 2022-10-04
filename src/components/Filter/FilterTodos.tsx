import React, { MouseEvent } from 'react';
import {
  completedBtnStyle,
  notCompletedBtnStyle,
} from '../../functions/styleFunc';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './style.css';

const FilterTodos: React.FC<{
  filterCompletedBtn: Function;
  filterNotCompletedBtn: Function;
}> = ({ filterCompletedBtn, filterNotCompletedBtn }) => {
  const { filterCompleted, isCompleted } = useTypedSelector(
    (state) => state.todo
  );
  const { notCompleted, alreadyCompleted } = isCompleted;

  function completedBtn(e: MouseEvent): void {
    e.stopPropagation();
    if (alreadyCompleted.length) {
      filterCompletedBtn();
    }
  }

  function notCompletedBtn(e: MouseEvent): void {
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
};

export default FilterTodos;
