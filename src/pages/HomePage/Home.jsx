import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../store/actions';
import Form from '../../components/Form/Form';

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    dispatch(setName(value));
  }

  function onSave(e) {
    e.preventDefault();
    if (name) {
      navigate('/todos');
    }
  }

  return (
    <div className='home-page'>
      <span>Enter your name</span>
      <Form
        text='SAVE'
        name='name'
        value={name}
        onChange={onChange}
        onClickBtn={onSave}
      />
    </div>
  );
}
