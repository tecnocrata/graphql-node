const { MongoClient } = require('mongodb')
const config = require('./config')
const { db } = config

const mongoUrl = `mongodb://${db.username}:${db.password}@${db.cluster}?retryWrites=true`
let connection

async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true // current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass this option
    })
    connection = client.db(db.name)
    console.log('CONNECTED!!! to ', db.cluster)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB
