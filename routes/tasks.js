var express = require("express");
var router = express.Router();
var fs = require("fs");

const data = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD

//Creamos la ruta
router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
