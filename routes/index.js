var express = require("express");
var router = express.Router();
var fs = require("fs");

//importamos el contexto (contenido de variables DustJS)
const context = JSON.parse(
  fs.readFileSync("/home/javieri/Documentos/DUST/views/context/context.json")
);

//Creamos la ruta
router.get("/", (req, res) => {
  res.render("index", context);
});

module.exports = router;
