import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setName } from '../../store/actions/actionsUser';
import Form from '../../components/Form/Form';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useTypedSelector((state) => state.user);

  function onChange(value: string): void {
    dispatch(setName(value));
  }

  function onSave(): void {
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
