import React from 'react';
import './style.css';

export default function Form({ name, value, onChange, onClickBtn, text }) {
  return (
    <form onSubmit={onClickBtn} className='form'>
      <input type='text' name={name} value={value} onChange={onChange} />
      <button type='submit' onClick={onClickBtn}>
        {text}
      </button>
    </form>
  );
}
