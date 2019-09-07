const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./finatra/dist/")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./finatra/dist/"));
});
app.listen(process.env.PORT || 3000, () => console.log("yes"));
console.log(path.resolve(__dirname, "./finatra/dist"));
