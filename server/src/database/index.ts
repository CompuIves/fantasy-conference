import Sequelize from "sequelize";

const sequelize = new Sequelize("fantasy", "cookie", "monster", {
  host: "localhost",
  dialect: "sqlite",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: "./database.sqlite",

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

export { Sequelize };
export default sequelize;
