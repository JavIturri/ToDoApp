var express = require("express");
var router = express.Router();
var fs = require("fs");

const taskdb = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD

//Creamos la ruta
router.post("/", (req, res) => {
  const newtask = req.body;
  taskdb.tasks.push(newtask);
  const str = JSON.stringify(taskdb);
  console.log(str);
  /* res.send(taskdb); */
  fs.writeFileSync("./DB/data.json", str);
  res.end();
});

module.exports = router;
