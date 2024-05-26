const Sequelize = require('sequelize')
const initModels = require('../models/init-models')
// const sequelize = new Sequelize(process.env.MYSQL_URI) // Example for postgres

const sequelize = new Sequelize(
  'railway','root','root',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
 );

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

var models = initModels(sequelize)

module.exports = ({
  sequelize : sequelize,
  models : models
})
