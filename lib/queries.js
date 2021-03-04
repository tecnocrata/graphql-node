const connectDB = require('./db')
const { ObjectID } = require('mongodb')

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
      console.log('Error ', error)
    }
    return build
  }
}
