# MongoDB documentation

## Create Text Index on all Collection: Persons

```mongodb
db.persons.createIndex ({"$**":"text"})
```
