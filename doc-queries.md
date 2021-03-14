# Queries ejecutadas en el curso en GraphiQL

## Simple

```grapql
{
  getBuildings{
    _id
    name
  }
}

{
  getAllProperties{
    _id
    code
    type
    area
  }
}

{
  getBuildings{
    _id
    name
    properties {
      _id
      code
    }
  }
}
```

## Alias y Fragments

```graphql
{
 buildings: getBuildings {
  _id
  name
  properties {
   ...propertyFields
  }
 }
 properties: getAllProperties {
  ...propertyFields
 }
}

#Reusar en consultas
fragment propertyFields on Property {
 _id
 code
}

# {
#  AllCourses: getCourses {
#   ...CourseFields
#  }

#  Course1: getCourse(id: "5cb4b8ce75f954a0585f7be2") {
#   ...CourseFields
#   teacher
#  }

#  Course2: getCourse(id: "5cb4b8ce75f954a0585f7be4") {
#   ...CourseFields
#   topic
#  }
# }

# fragment CourseFields on Course {
#  _id
#  title
#  description
#  people {
#   _id
#   name
#  }
# }
```

## Interfaces and how to query them

```graphql
{
 getPeople {
  _id
  name
  # Cuando haya algun portero recuperar su fecha de contratacion
  ... on Doorman {
   contractSince
  }
  # Cuando haya algun propietario recuperar su fecha de ingreso
  ... on Owner {
   since
  }
 }
}
```

## Directives and how to query with them. They are conditions

```graphql
query getPeopleData($includeDoormen: Boolean!) {
 getPeople {
  _id
  name
  # Cuando haya algun portero recuperar su fecha de contratacion
  ... on Doorman @include(if: $includeDoormen) {
   contractSince
  }
  # Cuando haya algun propietario recuperar su fecha de ingreso
  ... on Owner {
   since
  }
 }
}
```

## Cuando este en produccion, se puede consultar por medio de POSTMAN (u otro similar) y mandar el query mediante un GET desde la URL, asi (debe hacer un rl enconde antes de enviar el GET)

```
http://localhost:3000/api?query= { getBuildings{
    _id
    name
    properties {
      _id
      code
    }
  }
}
```