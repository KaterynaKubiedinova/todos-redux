import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import TodosPage from './pages/TodosPage/Todos';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
      </Routes>
  );
}

export default App;
