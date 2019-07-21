//insertOne Documents

use mongo_exercises

db.movies.insertOne({"title" : "Star Wars",
"writer" : "George Lucas",
"year" : 1977,
"actors" : [
  "Mark Hamill",
  "Harison Ford",
  "Carrie Fisher",
  "Peter Chushing",
  "James Earl Jones"
]})

db.movies.insertOne({"title" : "Raiders of the Lost Ark",
"writer" : "George Lucas",
"year" : 1981,
"actors" : [
  "Harrison Ford"
]})

db.movies.insertOne({"title" : "Fight Club",
"writer" : "Chuck Palahniuk",
"year" : 1999,
"actors" : [
  "Brad Pitt",
  "Edward Norton"
]})

db.movies.insertOne({"title" : "Pulp Fiction",
"writer" : "Quentin Tarantino",
"year" : 1994,
"actors" : [
  "John Travolta",
  "Uma Thurman"
]})

db.movies.insertOne({"title" : "Inglorious Basterds",
"writer" : "Quentin Tarantino",
"year" : 2009,
"actors" : [
  "Brad Pitt",
  "Diane Kruger",
  "Eli Roth"
]})

db.movies.insertOne({"title" : "The Hobbit: An Unexpected Journey",
"writer" : "J.R.R. Tolkein",
"year" : 2012,
"franchise" : "The Hobbit"})

db.movies.insertOne({"title" : "The Hobbit: The Desolation of Smaug",
"writer" : "J.R.R. Tolkein",
"year" : 2013,
"franchise" : "The Hobbit"})

db.movies.insertOne({"title" : "The Hobbit: The Battle of the Five Armies",
"writer" : "J.R.R. Tolkein",
"year" : 2012,
"franchise" : "The Hobbit",
"synopsis" : "Bilbo and Company are forced to engage in a war against an arrsay of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})

db.movies.insertOne({"title" : "Pee Wee Herman's Big Adventure",
"writer": "Phil Hartman",
"year": 1985})

db.movies.insertOne({"title": "Avatar"})

//Query / Find Documents

db.movies.find({})
db.movies.find({"writer": "Quentin Tarantino"})
db.movies.find({"actors": "Brad Pitt"})
db.movies.find({"franchise": "The Hobbit"})
db.movies.find({"year": {$gt: 1989, $lt: 2000}})
//db.movies.find({$and: [{"year": {$gt: 1989}}, {"year": {$lt: 2000}}]})
db.movies.find({$or: [{"year": {$gt: 2010}}, {"year": {$lt: 2000}}]})

//Update Documents

db.movies.updateOne({"title" : "The Hobbit: An Unexpected Journey"}, {$set: {"synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
db.movies.updateOne({"title" : "The Hobbit: The Desolation of Smaug"}, {$set: {"synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
db.movies.updateOne({"title" : "Pulp Fiction"}, {$addToSet: {"actors" : "Samuel L. Jackson"}})

//Text Search

db.movies.createIndex({synopsis: "text"})   //required step for text search on synopsis field

db.movies.find({$text: {$search: "Bilbo"}})
db.movies.find({$text: {$search: "Gandalf"}})
db.movies.find({$text: {$search: "Bilbo -Gandalf"}})
db.movies.find({$text: {$search: "dwarves hobbit"}})
db.movies.find({$text: {$search: "\"gold\" \"dragon\""}})

//Delete Documents

db.movies.deleteOne({"title" : "Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({"title": "Avatar"})

//Relationships

db.users.insertOne({"username" : "SallySmith",
"first_name" : "Sally",
"last_name" : "Smith"})

db.users.insertOne({"username" : "JimmyHagen",
"first_name" : "Jimmy",
"last_name" : "Hagen"})
//---------------------------------------------------

db.posts.insertOne({"username" : "SallySmith",
"title" : "Passes out at party",
"body" : "Wakes up early and cleans house"})

db.posts.insertOne({"username" : "SallySmith",
"title" : "Buys a House",
"body" : "Living in a new neighborhood now"})

db.posts.insertOne({"username" : "SallySmith",
"title" : "Reports a bug in your code",
"body" : "Sends you a Pull Request"})

db.posts.insertOne({"username" : "JimmyHagen",
"title" : "Borrows something",
"body" : "Returns it when he is done"})

db.posts.insertOne({"username" : "JimmyHagen",
"title" : "Borrows everything",
"body" : "The end"})

db.posts.insertOne({"username" : "JimmyHagen",
"title" : "Forks your repo on github",
"body" : "Sets to private"})
//---------------------------------------------------

db.comments.insertOne({"username" : "SallySmith",
"comment" : "Hope you got a good deal!",
"post" : ObjectId("5d33a00781ee9f525357a3fb")})

db.comments.insertOne({"username" : "SallySmith",
"comment" : "What's mine is yours!",
"post" : ObjectId("5d33a00c81ee9f525357a3fc")})

db.comments.insertOne({"username" : "SallySmith",
"comment" : "Don't violate the licensing agreement!",
"post" : ObjectId("5d33a01281ee9f525357a3fd")})

db.comments.insertOne({"username" : "JimmyHagen",
"comment" : "It still isn't clean",
"post" : ObjectId("5d339ff281ee9f525357a3f8")})

db.comments.insertOne({"username" : "JimmyHagen",
"comment" : "Denied your PR cause I found a hack",
"post" : ObjectId("5d33a00081ee9f525357a3fa")})

//Querying related collections

db.users.find({})
db.posts.find({})
db.posts.find({"username" : "SallySmith"})
db.posts.find({"username" : "JimmyHagen"})
db.comments.find({})
db.comments.find({"username" : "SallySmith"})
db.comments.find({"username" : "JimmyHagen"})
db.comments.find({"post" : ObjectId("5d33a00081ee9f525357a3fa")})

