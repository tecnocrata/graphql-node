// const buildings = [{
//   name: 'Zurich',
//   code: 'CBB-ZRCH',
//   localization: '',
//   city: 'CBBA'
// },
// {
//   name: 'Trivento',
//   code: 'CBB-TRVN',
//   localization: '',
//   city: 'CBBA'
// }]
const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
//   hello: () => {
//     return 'Hello world'
//   },
//   greetings: () => {
//     return 'How are you?'
//   }
  // Query: { // This change is due to graphql-tools usage
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
//  }
}
