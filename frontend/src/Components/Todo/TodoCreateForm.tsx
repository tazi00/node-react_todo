import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAddTodoMutation } from "../../store/Api/todoApi";

function TodoCreateForm() {
  const [addTodo, response] = useAddTodoMutation();

  const { register, handleSubmit, control, reset } = useForm({
    mode: "onBlur",
  });
  const onFormSubmit = async (data) => {
    await addTodo(data);
    reset();
  };
  const onErrors = (errors) => console.error(errors);
  const typeOptions = [
    { value: "home", label: "Home" },
    { value: "outside", label: "Outside" },
    { value: "work", label: "Work" },
  ];
  const priortyOptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];
  const registerOptions = {
    // ...
    role: { required: "Role is required" },
  };
  return (
    <div className="todos-createbox">
      <h4>Create Todo</h4>
      <form action="" onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <input
          type="text"
          placeholder="enter todo name"
          name="title"
          {...register("title")}
        />
        <textarea
          placeholder="enter description"
          name="desc"
          {...register("desc")}
        ></textarea>
        <div className="select-box">
          <Controller
            name="priorty"
            control={control}
            defaultValue=""
            // rules={registerOptions.role}
            render={({ field }) => (
              <select {...field} label="Text field">
                <option value="">--Priorty--</option>
                {priortyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />

          {/* <select name="" id="">
            <option value="">--Priorty--</option>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
          </select> */}
          <Controller
            name="tag"
            control={control}
            defaultValue=""
            // rules={registerOptions.role}
            render={({ field }) => (
              <select {...field} label="Text field">
                <option value="">--tag--</option>
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <input type="submit" value="submit" className="pm-btn" />
      </form>
    </div>
  );
}

export default TodoCreateForm;
