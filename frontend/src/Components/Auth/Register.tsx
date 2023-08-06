import React from "react";
import { authChanger } from "../../store/Features/Auth/authSlice";
import { useDispatch } from "react-redux/es/exports";

function Register({ title }: { title: string }) {
  const dispatch = useDispatch();
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form action="">
        <label htmlFor="">Enter Name</label>
        <input type="text" />
        <label htmlFor="">Enter Email</label>
        <input type="email" />
        <label htmlFor="">Enter Password</label>
        <input type="password" />
        <input type="submit" value="submit" className="pm-btn" />
      </form>
      <h4>
        If You are new then{" "}
        <span
          className="link"
          onClick={() => {
            dispatch(authChanger("login"));
          }}
        >
          {title}
        </span>{" "}
        first
      </h4>
    </div>
  );
}

export default Register;
