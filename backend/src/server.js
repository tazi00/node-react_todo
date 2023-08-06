const express = require("express");
const cors = require("cors");
const TodoRoutes = require("./routes/todoRoutes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", TodoRoutes);
app.listen(3004, () => {
  console.log(`server running on http://localhost:3004`);
});
