const data = require("../model/data");
const formatDate = require("../Utils/DateFormatter");

// Variable to track the last used ID
let lastTodoId = data.length > 0 ? data[data.length - 1].id : 0;

function getAllTodos(req, res) {
  if (data.length === 0) {
    res.json({ message: "sorry no data" });
    return;
  }
  const formattedData = data.map((todo) => ({
    ...todo,
    created: formatDate(todo.created),
  }));
  return res.json(formattedData);
}

function getSingleTodos(req, res) {
  const todoId = Number(req.params.id);

  if (todoId === 0) {
    res.status(400).json({ message: "No todo selected" });
    return;
  }

  const todo = data.find((todo) => todo.id === todoId);

  if (todo) {
    const newTodo = { ...todo };
    newTodo.created = formatDate(new Date());
    res.status(200).json(newTodo);
  } else {
    res.status(404).json({ message: "Sorry, no item found" });
  }
}

function addTodo(req, res) {
  const newTodo = req.body;
  if (!newTodo.title || !newTodo.desc || !newTodo.priorty || !newTodo.tag) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }
  newTodo.created = new Date();
  newTodo.id = ++lastTodoId; // Assign a new ID using the incremented lastTodoId variable
  if (newTodo.completed === undefined) {
    newTodo.completed = false;
  }
  data.push(newTodo);
  const formattedTodo = {
    ...newTodo,
    created: formatDate(newTodo.created),
  };

  res.status(201).json(formattedTodo);
}
function updateTodo(req, res) {
  const todoId = Number(req.params.id);
  const updatedTodo = req.body;
  console.log("Received PUT request with body:", updatedTodo);
  const todoToUpdate = data.find((todo) => todo.id === todoId);
  if (!todoToUpdate) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  if (updatedTodo.hasOwnProperty("completed")) {
    todoToUpdate.completed = updatedTodo.completed;
  }
  // Update the properties of todoToUpdate with the values from updatedTodo
  if (updatedTodo.hasOwnProperty("title")) {
    todoToUpdate.title = updatedTodo.title;
  }
  if (updatedTodo.hasOwnProperty("desc")) {
    todoToUpdate.desc = updatedTodo.desc;
  }
  if (updatedTodo.hasOwnProperty("priority")) {
    todoToUpdate.priority = updatedTodo.priority;
  }
  if (updatedTodo.hasOwnProperty("tag")) {
    todoToUpdate.tag = updatedTodo.tag;
  }

  const formattedTodo = {
    ...todoToUpdate,
    created: formatDate(todoToUpdate.created),
  };
  console.log("Updated todo:", formattedTodo);
  // Update the data array with the modified todoToUpdate object
  data[data.findIndex((todo) => todo.id === todoId)] = todoToUpdate;

  res.status(200).json(formattedTodo);
}

function deleteTodo(req, res) {
  const todoId = Number(req.params.id);
  const todoIndex = data.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    data.splice(todoIndex, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}
function updateTodoCompletion(req, res) {
  const todoId = Number(req.params.id);
  const { completed } = req.body;
  const todo = data.find((todo) => todo.id === todoId);
  if (todo) {
    todo.completed = completed;
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
}

module.exports = {
  getAllTodos,
  getSingleTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  updateTodoCompletion,
};
