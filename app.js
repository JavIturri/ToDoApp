const express = require("express");
var adaro = require("adaro");
var dust = require("dustjs-linkedin");
const router = require("./routes");
const fs = require("fs");

const app = express();
const port = 3000;

app.engine("dust", adaro.dust()); // establecer el motor de renderizado Adaro
app.set("views", "./views"); // establecer directorio views
app.set("view engine", "dust");

app.use(express.json());

app.use(express.static("public")); //carpeta publica para acceder a estilos y js

var indexRouter = require("./routes/index"); //enrutado de index
app.use("/", indexRouter); //salida index

var dataRouter = require("./routes/tasks"); //enrutado recibir JSON con las tareas
app.use("/tasks", dataRouter);

var postTask = require("./routes/postTask");
app.use("/postTasks", postTask);

var delTask = require("./routes/delTask");
app.use("/", delTask);

app.listen(port, () => {
  console.log(`ToDoApp listening on port ${port}`);
  console.log("http://127.0.0.1:3000/");
});
