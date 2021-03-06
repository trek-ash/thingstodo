
const Sequelize = require("sequelize");
const path = require('path');

require("dotenv")
.config({path:path.join(__dirname,'../.env')});
const sequelize = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.dialect,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./tasks.js")(sequelize, Sequelize);
db.users = require("./users")(sequelize, Sequelize);

module.exports = db;