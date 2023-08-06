import React from "react";
import TodoCreateForm from "./TodoCreateForm";
import TodoDetailBox from "./TodoDetailBox";

function TodoContentBox() {
  return (
    <div className="todo-content">
      <TodoCreateForm />
      <TodoDetailBox />
    </div>
  );
}

export default TodoContentBox;
