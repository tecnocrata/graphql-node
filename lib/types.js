// Cada vez que se requiera un tipo en una consulta, se vendra a este archivo
const { ObjectID } = require('mongodb')
const connectDB = require('./db')

module.exports = {
  Building: {
    properties: async ({ _id, properties }) => { // this parameter deconstruted is the field in the DB
      let propertiesData = []
      console.log('Expanding Building with properties info')
      try {
        const db = await connectDB()
        const ids = properties ? properties.map(id => ObjectID(id)) : []
        propertiesData = await db.collection('properties').find({ _id: { $in: ids } }).toArray()
        console.log(`get properties inside Building RESULT for building ${_id}`, propertiesData)
      } catch (error) {
        console.log('Error at building', error)
      }
      return propertiesData
    }
  },
  Property: {
    building: async ({ _id, buildingId }) => { // this parameter deconstruted is the field in the DB
      let buildingData = []
      console.log(`Expanding Property with building info for ${buildingId}`)
      try {
        const db = await connectDB()
        const id = buildingId ?? null
        if (!id) return { _id: '', name: 'No Value' }
        buildingData = await db.collection('buildings').findOne({ _id: ObjectID(id) })
        console.log(`get building inside Property RESULT for property ${_id}`, buildingData)
      } catch (error) {
        console.log('Error at property', error)
      }
      return buildingData
    }
  },
  Person: {
    __resolveType: (person, context, info) => {
      // Yo personalmente utuilizaria un campo de typo para discriminar, en lugar de explorar una propiedad
      if (person.since) return 'Owner'
      if (person.contractSince) return 'Doorman'
      return 'Person' // I need to create Person type!!!!!!
    }
  }
}
