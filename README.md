# Readme

## Start up instructions
1. Run

```
docker-compose -f docker-compose.stack.yml up
```

2. Run

`yarn dev`

## Client libraries de menor a mayor complejidad y funcionalidad

- FetchQl: https://www.npmjs.com/package/fetchql

Tiene un objeto de configuración donde se introduce todas los requerimientos que necesita un query.

- Graphql-request https://www.npmjs.com/package/graphql-request

Se puede usar tanto en node como en un aplicativo de front. Es el más sencillo de usar.

- Apollo Client: https://www.npmjs.com/package/apollo-client

En un cliente muy completo pues tiene los mismos usos que graphql-request, pero se puede manejar caché de query, uso de promesas, entre otros.

- Relay: https://relay.dev/

Es un cliente que se integran con librerias de front-end. es usado por Facebook de manera oficial para conectar con graphql desde Reactjs

- Vue Apollo: https://apollo.vuejs.org/

- Apollo Angular: https://www.apollographql.com/docs/angular/
