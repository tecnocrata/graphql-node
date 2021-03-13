const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
  getBuildings: async () => {
    let buildings = []
    try {
      const db = await connectDB()
      buildings = await db.collection('buildings').find().toArray()
      console.log(' getBuildings RESULT ', buildings)
    } catch (error) {
      console.log('Error ', error)
    }
    return buildings
  },
  getBuild: async (root, args) => {
    let build = null
    try {
      const db = await connectDB()
      build = await db.collection('buildings').findOne({ _id: ObjectID(args.id) })
      console.log(' getBuild RESULT ', build)
    } catch (error) {
      // console.log('Error ', error)
      errorHandler(error)
    }
    return build
  },
  getAllProperties: async () => {
    let properties = []
    try {
      const db = await connectDB()
      properties = await db.collection('properties').find().toArray()
      console.log('getAllProperties RESULT ', properties)
    } catch (error) {
      // console.log('Error ', error)
      errorHandler(error)
    }
    return properties
  },
  getPropertiesByBuilding: async (root, args) => {
    let properties = null
    try {
      const db = await connectDB()
      properties = await db.collection('properties').findOne({ _id: ObjectID(args.id) })
      console.log(' getBuild RESULT ', properties)
    } catch (error) {
      // console.log('Error ', error)
      errorHandler(error)
    }
    return properties
  },
  getPeople: async () => {
    let people = []
    try {
      const db = await connectDB()
      people = await db.collection('persons').find().toArray()
      console.log(' getPeople RESULT ', people)
    } catch (error) {
      console.log('Error ', error)
    }
    return people
  },
  getPerson: async (root, { id }) => {
    let build = null
    try {
      const db = await connectDB()
      build = await db.collection('persons').findOne({ _id: ObjectID(id) })
      console.log(' getPerson RESULT ', build)
    } catch (error) {
      errorHandler(error)
    }
    return build
  }
}
