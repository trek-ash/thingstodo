
const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser')
const path = require("path")
// db

const db = require("./models");

db.sequelize.sync();
  
// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, instancekey, email, Access-Control-Request-Headers, x-http-method-override");
  res.header("Access-Control-Max-Age", '1800');
  if (req.method === 'OPTIONS') {
      res.end();
  } else {
      res.msg = {}
      next();
  }
})
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use("/api/v1/task", require("./routes/task"))
app.use("/api/v1/user", require("./routes/user"))
app.use(express.static(path.join(__dirname, "frontend", "build")))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


app.listen(port, ()=>{
    console.log("server running..")
})