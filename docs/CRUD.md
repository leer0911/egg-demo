# Mongoose CRUD (Create, Read, Update, Delete)

| HTTP Method | CRUD Operation |
|-------------|----------------|
| GET         | Read           |
| POST        | Create         |
| PUT         | Update         |
| DELETE      | Delete         |


## Read

This is show how we get items from MongoDB. Mongoose gives us 3 basic ways to get
stuff from the database (`.find()`,`.findOne()`,and,`.findById()`),and one advanced
way (`.where()`)

### `.find([query],[callback])`

Finds all documents in the database that match the query. If no query is given,
it returns everything

```ts
import Person from '../model/person'

Person.find((err,people)=>{
    if(err) return res.status(500).send(err)
    return res.status(200).send(people)
})


Person.find({name:"John James",age:36},(err,people)=>{
    if(err) return res.status(500).send(err)
    return res.status(200).send(people)
})

```

### `.findOne([query],[fieldsToReturn],[callback])`

Finds one object from the database. If your query matches more than one item
in the database, it still only returns the first one it finds.

```ts
kitten.findOne(
    {color:"white",name:"Dr. Miffles",age:1},
    {name:true,owner:true},
    (err,kitten)=>{
        if(err) return res.status(200).send(err)
        return res.status(200).send(kitten)
    }
)
```

### `.findById(id,[fieldsToReturn],[callback])`

Finds a single object in the database by the provided `id`.

```ts
kitten.findById(req.params.kittenId,(err,kitten)=>{
    if(err) return res.status(500).send(err)
    return res.status(200).send(kitten)
})
```

### `.where(selector)`

This one is powerful, but a bit more confusing. It allows us to do more complex
queries to the database.

```ts
kitten.where("age").gte(1).lte(4).exec((err,kittens)=>{
    // Do stuff
})
```

## Create

This is how we can create new item in the database. This will commonly be
from an HTTP `POST` request,although you can do this anywhere you want.

```ts
import Todo from '../models/todo'

const newTodoObj = new Todo(req.body);

newTodoObj.save(err=>{
    if(err) return res.status(500).send(err);
    return res.status(200).send(newTodoObj);
})
```

`mongoose-findorcreate`

## Update

This is just a combination of "read" and "create",but instead of creating a new
one with `const newTodoObj = new Todo(...)`,we query the data base and send a
changeto to be made using `findByIdAndUpdate` Make sure to read the comments
below explaining each of the parts:

```ts
import Todo from '../models/todo'

Todo.findByIdAndUpdate(req.params.todoId,req.body,{new:true},(err,todo)=>{
    if(err) return res.status(500).send(err);
    return res.send(todo)
})
```

- findOneAndUpdate
- findByIdAndUpdate

Another option would be to use a `findOne` or `findById`,make the changes to the
properties manually,the use `.save` to save the change. The benefit of doing it
this way is that you have more control over the changes being made,but at the
expense of having to make two trips to the database (one to retrieve the document)

## Delete

```ts
Todo.findByIdAndRemove(req,params.todoId,(err,todo)=>{
    if (err) return res.status(500).send(err);
    const response = {
        message:"Todo successfully deleted",
        id: todo._id
    }

    return res.status(200).send(response);
})
```





























































