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

module.exports = {
//   hello: () => {
//     return 'Hello world'
//   },
//   greetings: () => {
//     return 'How are you?'
//   }
  Query: { // This change is due to graphql-tools usage
    getBuildings: async () => {
      let buildings = []
      try {
        const db = await connectDB()
        buildings = await db.collection('buildings').find().toArray()
        console.log(' RESULT ', buildings)
      } catch (error) {
        console.log('Error ', error)
      }
      return buildings
    }
    // getBuild: (root, args) => {
    //   const builds = buildings.filter(b => b._id === args.id)
    //   return builds.pop() // I just want to return the firs element
    // }
  }
}
