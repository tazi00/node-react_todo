import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  useAddTodoMutation,
  useGetSingleTodoQuery,
  useUpdateTodoMutation,
} from "../../store/Api/todoApi";
function TodoEditModal({ setShowEditModal, id }) {
  const { data, isLoading, error } = useGetSingleTodoQuery(id);
  const [updateTodo, response] = useUpdateTodoMutation();
  const { register, handleSubmit, control, reset } = useForm({
    mode: "onBlur",
  });
  const onFormSubmit = async (data) => {
    await updateTodo({ id, data });
    console.log(data);
    setShowEditModal(false);
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
  return (
    <>
      <div className="todo-backdrop">
        <div className="todo-editform">
          <h3>
            Edit Todo
            <span onClick={() => setShowEditModal(false)}>&times;</span>
          </h3>
          <form action="" onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <input
              type="text"
              placeholder="enter todo name"
              name="title"
              defaultValue={data?.title}
              {...register("title")}
            />
            <textarea
              placeholder="enter description"
              name="desc"
              defaultValue={data?.desc}
              {...register("desc")}
            ></textarea>
            <div className="select-box">
              <Controller
                name="priorty"
                control={control}
                defaultValue={data?.priorty}
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

              <Controller
                name="tag"
                control={control}
                defaultValue={data?.tag}
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
            {/* <label className="completed" htmlFor="">
              Completed <input type="checkbox" name="completed" id="" />
            </label> */}

            <input type="submit" value="submit" className="pm-btn" />
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoEditModal;
