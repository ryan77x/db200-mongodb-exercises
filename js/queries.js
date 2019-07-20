//insertOne Documents

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

