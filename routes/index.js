var express = require("express");
var router = express.Router();
var fs = require("fs");

//importamos el contexto (contenido de variables DustJS)

//Creamos la ruta
router.get("/", (req, res) => {
  const context = JSON.parse(fs.readFileSync("./DB/data.json"));
  res.render("index", context);
});

module.exports = router;
