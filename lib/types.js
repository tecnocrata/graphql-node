// Cada vez que se requiera un tipo en una consulta, se vendra a este archivo
const { ObjectID } = require('mongodb')
const connectDB = require('./db')

module.exports = {
  Building: {
    properties: async ({ _id, properties }) => { // this parameter deconstruted is the field in the DB
      let propertiesData = []
      try {
        const db = await connectDB()
        const ids = properties ? properties.map(id => ObjectID(id)) : []
        propertiesData = await db.collection('properties').find({ _id: { $in: ids } }).toArray()
        console.log(`get properties inside Building RESULT for building ${_id}`, propertiesData)
      } catch (error) {
        console.log('Error ', error)
      }
      return propertiesData
    }
  }
}
