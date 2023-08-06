import React from "react";
import {
  useDeleteTodoMutation,
  useGetSingleTodoQuery,
} from "../../store/Api/todoApi";
import { useDispatch } from "react-redux";
import { setSingleTodo } from "../../store/Features/Todo/todoSlice";
import ToggleButton from "./ToggleButton";

function TodoBoxItem({ id, title, completed, priorty, created }) {
  const [deleteTodo, response] = useDeleteTodoMutation();
  const dispatch = useDispatch();
  async function handleDeleteTodo(id) {
    await deleteTodo(id);
  }
  return (
    <li>
      <div className="todo-item">
        <span>{id}</span>
        <h2>{title}</h2>
        <h3>{completed ? "completed" : "Pending"}</h3>
        <h4>{priorty}</h4>
        <h6> created on {created}</h6>
        <div className="options">
          <button onClick={() => dispatch(setSingleTodo(id))}>view</button>
          <button onClick={() => handleDeleteTodo(id)}>delete</button>
        </div>
      </div>
    </li>
  );
}

export default TodoBoxItem;
