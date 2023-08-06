import React from "react";
import { useSelector } from "react-redux"; // <-- Import useSelector from react-redux
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";

function AuthLayout() {
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);

  return (
    <>
      {auth === "login" ? (
        <Login title={"register"} />
      ) : (
        <Register title={"login"} />
      )}
    </>
  );
}

export default AuthLayout;
