import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { authChanger } from "../../store/Features/Auth/authSlice";
import { useForm } from "react-hook-form";
function Login({ title }: { title: string }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const dispatch = useDispatch();
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Enter Email</label>
        <input type="email" {...register("firstName")} />
        <label htmlFor="">Enter Password</label>
        <input type="password" {...register("password")} />
        <input type="submit" value="submit" className="pm-btn" />
      </form>
      <h4>
        If You are new then{" "}
        <span
          className="link"
          onClick={() => {
            dispatch(authChanger("register"));
          }}
        >
          {title}
        </span>{" "}
        first
      </h4>
    </div>
  );
}

export default Login;
