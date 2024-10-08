const express = require("express");
const app = express();
require("./db/db")
const route = require("./routes/user.routes")

app.set("port", 4000);
app.use(express.json())
app.use("/auth", route)

app.get("/", (req, res) => {
  res.send("raiz del backend")
})

app.listen(app.get("port"), () => {
  console.log("port:", app.get("port"))
})