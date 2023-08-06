import { useSelector } from "react-redux";
import { useGetSingleTodoQuery } from "../../store/Api/todoApi"; // Replace 'path/to/useGetSingleTodoQuery' with the actual path to the hook.
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import TodoEditModal from "./TodoEditModal";

function TodoDetailBox() {
  const selectedTodo = useSelector((state) => state.todo.singleTodo);
  const [showEditModal, setShowEditModal] = useState(false);
  // Fetch the detailed data for the selected Todo using useGetSingleTodoQuery
  const { data, error, isLoading } = useGetSingleTodoQuery(selectedTodo);

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> no todo selected</div>;
  }

  return (
    data && (
      <>
        <div className="todos-detail-box">
          <ToggleButton
            key={data.id}
            id={data?.id}
            completed={data?.completed}
          />
          <h6>
            Todo No. <span>#{data.id}</span>
          </h6>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <h5>
            Status: <span>{data.completed ? "completed" : "Pending"}</span>
          </h5>
          <h5>
            Priotiy: <span>{data.priorty}</span>
          </h5>
          <h5>created at {formatDate(new Date(data.created))}</h5>
          <div className="options">
            <button onClick={() => setShowEditModal(true)}>Edit</button>
          </div>
        </div>
        {showEditModal && (
          <TodoEditModal id={data.id} setShowEditModal={setShowEditModal} />
        )}
      </>
    )
  );
}

export default TodoDetailBox;
