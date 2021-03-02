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
  }
}
