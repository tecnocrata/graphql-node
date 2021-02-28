require('dotenv').config()

const db = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  cluster: process.env.DB_HOST, // HOST
  name: process.env.DB_NAME,
  port: process.env.DB_PORT || 27017
}

module.exports = {
  db
}
