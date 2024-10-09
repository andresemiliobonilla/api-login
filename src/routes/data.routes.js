const express = require("express");
const route = express.Router();
const {verificarToken} = require("../middlewares/auth");
const {getData} = require("../controllers/data.controllers")

route.get("/", [verificarToken], getData)

module.exports = route;