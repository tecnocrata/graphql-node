// const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const cors = require('cors')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const PORT = process.env.PORT || 3000
const isProduction = process.env.NODE_ENV === 'production'
// Definiendo schema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())
app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: !isProduction // This is the ide for dev/testing, NOT production
  })
)

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}/api`)
})

// // Ejecutar el primer Hello
// graphql(schema, "{ greetings }", resolvers).then((data) => {
//   console.log(data);
// });
