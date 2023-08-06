import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import TodoBoxItem from "./TodoBoxItem";
import { useGetAllTodosQuery } from "../../store/Api/todoApi";

function TodoBox() {
  const { data, error, isLoading } = useGetAllTodosQuery();
  const todos = useSelector((state) => state.todo.allTodos);
  const filterCompleted = useSelector((state) => state.todo.filterCompleted);
  const searchText = useSelector((state) => state.todo.searchText);
  const priority = useSelector((state) => state.todo.priority);
  const tag = useSelector((state) => state.todo.tag);
  const sortBy = useSelector((state) => state.todo.sortBy);
  const sortOrder = useSelector((state) => state.todo.sortOrder);

  if (isLoading) {
    return <h6>Loading...</h6>;
  }

  if (error) {
    return <h6>Error: {error.message}</h6>;
  }

  // Filter and sort todos based on the options
  const filteredTodos = data?.filter((todo) => {
    if (filterCompleted === "completed" && !todo.completed) return false;
    if (filterCompleted === "pending" && todo.completed) return false;
    const searchQuery = searchText.toLowerCase();
    const todoTitle = todo.title.toLowerCase();
    if (searchText && !todoTitle.includes(searchQuery)) return false;
    if (priority && todo.priority !== priority) return false;
    if (tag && todo.tag !== tag) return false;
    return true;
  });

  const sortedTodos = filteredTodos?.slice().sort((a, b) => {
    // Assuming "priority" is a string field
    return sortOrder === "asc"
      ? a?.priority?.localeCompare(b?.priority)
      : b?.priority?.localeCompare(a?.priority);
  });

  return (
    <div className="todo-box">
      <h4>All Todos</h4>
      {sortedTodos.length ? (
        <ul>
          {sortedTodos.map((todo) => (
            <Fragment key={todo.id}>
              <TodoBoxItem {...todo} />
            </Fragment>
          ))}
        </ul>
      ) : (
        <h6>No todos found</h6>
      )}
    </div>
  );
}

export default TodoBox;
