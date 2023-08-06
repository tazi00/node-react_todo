import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Applayout from "./Layout/Applayout";
import AuthLayout from "./Layout/AuthLayout";
import TodoLayout from "./Layout/TodoLayout";
import TodoListBox from "./Components/Todo/TodoListBox";
import TodoContentBox from "./Components/Todo/TodoContentBox";

function App() {
  const verified = true;
  return (
    <>
      <Applayout>
        <Header />
        <div className="content">
          {!verified && <AuthLayout />}
          {verified && (
            <TodoLayout>
              <TodoListBox></TodoListBox>
              <TodoContentBox></TodoContentBox>
            </TodoLayout>
          )}
        </div>
        <Footer />
      </Applayout>
    </>
  );
}

export default App;
