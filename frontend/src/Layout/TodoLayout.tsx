import React, { ReactNode } from "react";

function TodoLayout({ children }: { children: ReactNode }) {
  return (
    <section className="todo-sec">
      <div className="container">
        <div className="grid" data-col="2/4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default TodoLayout;
