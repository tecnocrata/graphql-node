const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const PORT = process.env.PORT || 3000

// Definiendo schema
const schema = buildSchema(
  readFileSync(
    join(__dirname, 'lib', 'schema.graphql'), 'utf-8'))

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true // This is the ide for testing
  })
)

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}/api`)
})

// // Ejecutar el primer Hello
// graphql(schema, "{ greetings }", resolvers).then((data) => {
//   console.log(data);
// });
