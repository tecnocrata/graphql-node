const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const PORT = process.env.PORT || 3000

// Definiendo schema
const schema = buildSchema(`
type Query {
  "Retorna saludo al mundo"
  hello: String
  "Retorna un saludo a todos"
  greetings: String
}
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hello world'
  },
  greetings: () => {
    return 'How are you?'
  }
}

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true // This is the ide for testing
  })
)

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${process.env.PORT}/api`)
})

// // Ejecutar el primer Hello
// graphql(schema, "{ greetings }", resolvers).then((data) => {
//   console.log(data);
// });
