// 1. Require Mongoose

const mongoose = require("mongoose");

// 2. Require your Model

const Vampire = require("./models/vampire");

// 3. Require your extra data source

const vampireData = require("./populateVampires");

// 4. Connect your database

require("../config/db.connection");

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
/*
Vampire.collection.insertMany(vampireData, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});
*/

// ### Add some new vampire data
/*
const newVampireOne = 
  {
    name: 'Royal Fangs',
    hair_color: 'black',
    eye_color: 'green',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['time','popcorn'],
    location: 'Seattle, Washington, US',
    gender: 'm',
    victims: 439
  };
  
  const newVampireTwo = {
    name: 'Rocco Blood',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['Dolly Parton', 'Friends', 'Computers'],
    location: 'Milan, Italy',
    gender: 'm',
    victims: 788
  };
  
const newVampireThree = {
    name: 'Bleda Thirsty',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'blond',
    eye_color: 'blue',
    loves: ['lucky charms', 'blood'],
    location: 'Auckland, New Zealnd',
    gender: 'f',
    victims: 56
  };
  
  const newVampireFour = {
    name: 'Bella',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Edward', 'Forks', 'Twilight'],
    location: 'Forks, Washington, USA',
    gender: 'f',
    victims: 1345
  };

Vampire.create(
  [newVampireOne, 
  newVampireTwo, 
  newVampireThree, 
  newVampireFour],
  function (error, newPost) {
    if (error) {
        console.log(error);
    }
    console.log("New vampires added");
  }); 

  */

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
  
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
