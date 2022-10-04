import React, { ChangeEvent, MouseEvent } from 'react';
import './style.css';

const Form: React.FC<{
  name: string;
  value: string;
  onChange: Function;
  onClickBtn: Function;
  text: string;
}> = ({ name, value, onChange, onClickBtn, text }) => {
  function onSubmit(e: ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    onClickBtn();
  }

  function onSubmitBtn(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    onClickBtn();
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = e.target.value;
    onChange(value);
  }

  return (
    <form onSubmit={onSubmit} className='form'>
      <input type='text' name={name} value={value} onChange={onChangeInput} />
      <button type='submit' onClick={onSubmitBtn}>
        {text}
      </button>
    </form>
  );
};

export default Form;
