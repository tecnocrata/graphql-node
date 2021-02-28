const buildings = [{
  _id: 'any-1',
  name: 'Zurich',
  code: 'CBB-ZRCH',
  localization: ''
},
{
  _id: 'any-2',
  name: 'Trivento',
  code: 'CBB-TRVN',
  localization: ''
}]
module.exports = {
//   hello: () => {
//     return 'Hello world'
//   },
//   greetings: () => {
//     return 'How are you?'
//   }
  Query: { // This change is due to graphql-tools usage
    getBuildings: () => buildings,
    getBuild: (root, args) => {
      const builds = buildings.filter(b => b._id === args.id)
      return builds.pop() // I just want to return the firs element
    }
  }
}
