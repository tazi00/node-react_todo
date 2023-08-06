import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChecked } from "../../store/Features/Todo/todoSlice";
import { useUpdateTodoCompletionMutation } from "../../store/Api/todoApi";
function ToggleButton({ id, completed }) {
  const [checked, setChecked] = useState(completed);
  const [updateTodoCompltion, response] = useUpdateTodoCompletionMutation();

  console.log(completed);
  async function handleChange() {
    setChecked((prev) => !prev);
    const newTodoStatus = {
      completed: !checked,
    };
    await updateTodoCompltion({ id, newTodoStatus });
  }
  return (
    <div className="button r" id="button-1">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={() => handleChange()}
      />
      <div className="knobs"></div>
      <div className="layer"></div>
    </div>
  );
}

export default ToggleButton;
