const { ObjectID } = require('mongodb')
const connectDB = require('./db')

module.exports = {
  createBuild: async (root, args) => {
    console.log('Creating build')
    const defaults = { // Default values for non mandatory fields!
      code: 'None',
      localization: '',
      city: 'CBBA'
    }
    args.input = { ...defaults, ...args.input }
    console.log('Input completed...', args.input)
    try {
      const db = await connectDB()
      const build = await db.collection('buildings').insertOne(args.input)
      args.input._id = build.insertedId
    } catch (error) {
      console.error(error)
    }
    return args.input
  },
  updateBuilding: async (root, args) => {
    console.log('Updating building')
    let building
    console.log('Input completed...', args.input)
    try {
      const db = await connectDB()
      await db.collection('buildings').updateOne({ _id: ObjectID(args._id) }, { $set: args.input })
      building = await db.collection('buildings').findOne({ _id: ObjectID(args._id) })
    } catch (error) {
      console.error(error)
    }
    return building
  },
  createProperty: async (root, args) => {
    console.log('Creating property')
    const defaults = { // Default values for non mandatory fields!
    }
    args.input = { ...defaults, ...args.input }
    console.log('Input completed...', args.input)
    try {
      const db = await connectDB()
      const property = await db.collection('properties').insertOne(args.input)
      args.input._id = property.insertedId
    } catch (error) {
      console.error(error)
    }
    return args.input
  },
  updateProperty: async (root, args) => {
    console.log('Updating property')
    let property
    console.log('Input completed...', args.input)
    try {
      const db = await connectDB()
      await db.collection('properties').updateOne({ _id: ObjectID(args._id) }, { $set: args.input })
      property = await db.collection('properties').findOne({ _id: ObjectID(args._id) })
    } catch (error) {
      console.error(error)
    }
    return property
  }
}
