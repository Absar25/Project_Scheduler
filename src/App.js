import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Calender from "./components/Calender";

function App() {
  const [selectDate, setSelectDate] = useState("open");
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex-parent-element">
      <div className="flex-child-element magenta">
        <TodoList selectDate={selectDate} todo={[todos, setTodos]} />
      </div>
      <div className="flex-child-element green">
        <Calender setSelectDate={setSelectDate} todo={[todos, setTodos]} />
      </div>
    </div>
  );
}

export default App;
