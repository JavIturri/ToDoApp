var express = require("express");
var router = express.Router();
var fs = require("fs");

const context = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD

//Creamos la ruta
router.get("/", (req, res) => {
  res.render("taskDB", context);
});

module.exports = router;
