const express = require("express");
const route = express.Router();
const {postLogin, postRegister} = require("../controllers/auth.controllers")

route.post("/login", postLogin);
route.post("/register", postRegister);


module.exports = route;
