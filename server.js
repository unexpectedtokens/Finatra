const app = require("express")();
const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/finatra/dist"));
});
app.listen(process.env.PORT);
