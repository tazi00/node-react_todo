import React from "react";
import TodoOptions from "./TodoOptions";
import TodoBox from "./TodoBox";

function TodoListBox() {
  return (
    <div className="todos-list-box">
      <TodoOptions />
      <TodoBox />
    </div>
  );
}

export default TodoListBox;
