var express = require("express");
var router = express.Router();
var fs = require("fs");

//Creamos la ruta
router.get("/", (req, res) => {
  const context = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD
  console.log(context);
  res.render("taskDB", context);
  console.log("get");
});

module.exports = router;
