var Sequelize = require('sequelize'), connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('the_hunt_db', 'root', 'runthisCODE', {
    host: 'localhost',
    dialect: 'mysql',
    port: '8020'
  })
};

module.exports = connection;

//runthisCODE