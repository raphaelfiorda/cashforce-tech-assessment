require('dotenv').config();

const config = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'cashforce_v3',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
