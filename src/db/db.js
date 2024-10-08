const db = require("mongoose");

db.connect("mongodb://localhost:27017/auth")
  .then(res => console.log("db connect"))
  .catch(err => console.log(err))

module.exports = db;