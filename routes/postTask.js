var express = require("express");
var router = express.Router();
var fs = require("fs");

//Creamos la ruta
router.post("/", (req, res) => {
  const taskdb = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD
  const newtask = req.body;
  taskdb.tasks.push(newtask);
  const str = JSON.stringify(taskdb);
  console.log(str);
  res.status(201);
  res.send(taskdb);
  fs.writeFileSync("./DB/data.json", str);
  res.end();
});

module.exports = router;
