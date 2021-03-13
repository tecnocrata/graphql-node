# Queries ejecutadas en el curso en GraphiQL

## Simple

```grapql
mutation {
  createBuild (input: {
    name: "Las Rosas"
  }) {
    _id
			nme
  }
}

mutation {
  createProperty(input:{
    code: "1A",
    type: Departament,
    floor:1,
    area:"100",
    buildingId:"603bc3bcf80bd2da8f56cd7e"
  }) {
    _id
  }
}

mutation {
  updateProperty (_id:"6042e230c4c12744cc00ccf9", input: {
    area:"80"
  }) {
    _id
    code
    area
  }
}

mutation {
  addProperty (propertyId: "6042e230c4c12744cc00ccf9",
    buildingId:"603bc3bcf80bd2da8f56cd7e") {
    _id
  }
}
```
