var express = require("express");
var router = express.Router();
var fs = require("fs");

//Creamos la ruta
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./DB/data.json")); //importamos la BD
  res.send(data);
});

module.exports = router;
