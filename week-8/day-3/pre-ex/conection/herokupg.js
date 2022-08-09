const knex =require('knex');
const dotenv = require('dotenv')

dotenv.config();


const db = knex({
    client:'pg',
    connection:{
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      ssl:{rejectUnauthorized:false}
    }
  });

  module.exports={
      db
  }