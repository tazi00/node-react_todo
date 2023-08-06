const express = require("express");
const {
  getAllTodos,
  getSingleTodos,
  addTodo,
  deleteTodo,
  updateTodoCompletion,
  updateTodo,
} = require("../Controller/TodoController");

// const todoController = require("../../src/Controller/TodoController");
const TodoRouter = express.Router();

TodoRouter.get("/", (req, res) => {
  res.send({ message: "hello from express" });
});

TodoRouter.get("/todos", getAllTodos);
TodoRouter.post("/todos", addTodo);
TodoRouter.get("/todo/:id", getSingleTodos);
TodoRouter.put("/todo/:id/completion", updateTodoCompletion);
TodoRouter.put("/todo/:id", updateTodo);
TodoRouter.delete("/todo/:id", deleteTodo);
module.exports = TodoRouter;
