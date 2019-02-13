# connections

`mongoose.connect()`

# schema

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape
of the documents within that collection.

## The permitted SchemaTypes are

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

Schemas not only define the structure of your document and casting of properties, they also define document
instance methods,static Model methods,compound indexes, and document lifecycle hooks called middle ware.

## Creating a model

`mongoose.model(modelName,schema)`

## Instance methods

```js
var animalSchema = new Schema({ name: String, type: String });

animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};
```

## Options

Schemas have a few configurable options which can be passed to the constructor or set directly

```js
new Schema({}, options);

var schema = new Schema({});

schema.set(option, value);
```

# SchemaTypes

A SchemaTypes is different from a type. In other words, `mongoose.ObjectId !== mongoose.Types.ObjectId`

A SchemaTypes is just a configuration object for mongoose

## All Schema Types

- `required`
- `default`
- `select`
- `validate`
- `get`
- `set`
- `alias`

## indexes

- `index`
- `unique`
- `sparse`

# Models

Models are fancy constructors compiled from schema definition. An instance of a model is called a document

Models are responsible for creating and reading documents from the underlying MongoDB database.
