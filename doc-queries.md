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
