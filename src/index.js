const express = require("express");
const app = express();
require("./db/db")
const authRoute = require("./routes/user.routes");
const dataRoute = require("./routes/data.routes");
const cors = require('cors');

app.set("port", 4000);
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/", dataRoute);

app.listen(app.get("port"), () => {
  console.log("port:", app.get("port"))
})