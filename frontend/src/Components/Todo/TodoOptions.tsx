import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCompleted,
  setSearchText,
  setPriority,
  setTag,
  setSortBy,
  setSortOrder,
} from "../../store/Features/Todo/todoSlice";

function TodoOptions() {
  const filterCompleted = useSelector((state) => state.todo.filterCompleted);
  const searchText = useSelector((state) => state.todo.searchText);
  const priority = useSelector((state) => state.todo.priority);
  const tag = useSelector((state) => state.todo.tag);
  const sortBy = useSelector((state) => state.todo.sortBy);
  const sortOrder = useSelector((state) => state.todo.sortOrder);
  const dispatch = useDispatch();

  const handleFilterCompletedChange = (value) => {
    dispatch(setFilterCompleted(value));
  };

  const handleSearchTextChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  const handlePriorityChange = (event) => {
    dispatch(setPriority(event.target.value));
  };

  const handleTagChange = (event) => {
    dispatch(setTag(event.target.value));
  };

  const handleSortByChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  const handleSortOrderChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  const handleAllTodosClick = () => {
    // Reset all filters and sorting options to their default values
    dispatch(setFilterCompleted(null));
    dispatch(setSearchText(""));
    dispatch(setPriority(""));
    dispatch(setTag(""));
    dispatch(setSortBy(""));
    dispatch(setSortOrder(""));
  };
  return (
    <div className="todo-options">
      <ul>
        <li>
          <button onClick={handleAllTodosClick}>All Todos</button>
        </li>
        <li>
          <button onClick={() => handleFilterCompletedChange("completed")}>
            Completed
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterCompletedChange("pending")}>
            Pending
          </button>
        </li>
        <li>
          <input
            type="text"
            placeholder="search todo"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </li>
        <li>
          <select value={priority} onChange={handlePriorityChange}>
            <option value="">--Priorty--</option>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
          </select>
        </li>
        <li>
          <select value={tag} onChange={handleTagChange}>
            <option value="">--type--</option>
            <option value="home">Home</option>
            <option value="outside">Outside</option>
            <option value="work">Work</option>
          </select>
        </li>
        <li>
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="">--sorting--</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default TodoOptions;
