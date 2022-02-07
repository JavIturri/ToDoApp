var express = require("express");
var router = express.Router();
var fs = require("fs");

//Creamos la ruta
router.delete("/", (req, res) => {
  const taskdb = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD
  const task = req.body;
  console.log(task);
  taskstr = JSON.stringify(task);
  taskdbstr = JSON.stringify(taskdb);
  const filterarray = () => {
    return taskdb.tasks.filter((el) => el.name !== task.name);
  };
  if (taskdbstr.includes(taskstr)) {
    const filtered = filterarray();
    const filteredstring = JSON.stringify(filtered);
    const final = `{ "tasks": ${filteredstring} }`;
    fs.writeFileSync("./DB/data.json", final);
  } else {
    console.log("no existe esta task");
  }
  res.status(201);
  res.send(task);
  res.end();
});

module.exports = router;
