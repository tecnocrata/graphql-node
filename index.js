const { graphql, buildSchema } = require("graphql");

// Definiendo schema
const schema = buildSchema(`
type Query {
  "Retorna saludo al mundo"
  hello: String
  "Retorna un saludoa todos"
  greetings: String
}
`);

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return "Hello world";
  },
  greetings: () => {
    return "How are you?";
  },
};

// // Ejecutar el primer Hello
graphql(schema, "{ greetings }", resolvers).then((data) => {
  console.log(data);
});
