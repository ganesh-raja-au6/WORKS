const Sequelize = require("sequelize");

const { POSTGRESS_URI, POSTGRESS_PASSWORD } = process.env;

const sequelize = new Sequelize(
  POSTGRESS_URI.replace("pass", POSTGRESS_PASSWORD)
);

sequelize
  .authenticate()
  .then(() => console.log("Connection established successfully"))
  .catch(err => console.log(err));
