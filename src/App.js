import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Calender from './components/Calender';

function App() {
  const [selectDate,setSelectDate]= useState('open');
  return (
    <div  className="flex-parent-element">
      <div className = 'flex-child-element magenta'><TodoList 
      selectDate={selectDate}/></div>
      <div className = 'flex-child-element green'><Calender 
      setSelectDate ={setSelectDate}/></div>
      
    </div>
    
  );
}

export default App;