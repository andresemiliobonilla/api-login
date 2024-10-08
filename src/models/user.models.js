const {Schema, model} = require("mongoose");

const User = new Schema({

  email: String,
  usuario: String,
  clave: String

})

module.exports = model("user", User);
