var shelterData = {
    name: "Happitails Homes for Animals",
    address: "501 E. Middlefield Rd., Mountain View, CA",

    animals: [{
            name: 'rover',
            species: 'dog',
            age: 7,
            gender: 'm',
            toys: ['ball', 'bone']
        }, {
            name: 'max',
            species: 'dog',
            age: 3,
            gender: 'm',
            toys: ['bone']
        }, {
            name: 'lucy',
            species: 'dog',
            age: 4,
            gender: 'f',
            toys: ['stick', 'chewtoy']
        }, {
            name: 'tiger',
            species: 'cat',
            age: 8,
            gender: 'm',
            toys: ['bottlecap', 'fur mouse', 'jingly bell']
        }, {
            name: 'reggie',
            species: 'cat',
            age: 9,
            gender: 'm',
            toys: []
        }, {
            name: 'bond',
            species: 'cat',
            age: 6,
            gender: 'f',
            toys: ['bottlecap', 'jingly bell']
        }


    ],
    clients: [

        {
            name: "Etsuko Fogleman",
            age: 38,
            pets: [{
                    name: 'flopsy',
                    species: 'rabbit',
                    age: 4,
                    gender: 'f',
                    toys: []
                }, {
                    name: 'mopsy',
                    species: 'rabbit',
                    age: 6,
                    gender: 'm',
                    toys: []
                }, {
                    name: 'cottontail',
                    species: 'rabbit',
                    age: 6,
                    gender: 'm',
                    toys: []
                }


            ]
        }, {
            name: "Vincenzo Gaunt",
            age: 27,
            pets: [{
                    name: 'Fido',
                    species: 'dog',
                    age: 2,
                    gender: 'm',
                    toys: ['ball']
                },

                {
                    name: 'Spot',
                    species: 'dog',
                    age: 9,
                    gender: 'm',
                    toys: ['stick', 'chewtoy']
                }
            ]
        }, {
            name: "Yuriko Wilken" ,
            age: 33,
            pets: [{
                    name: 'Fluffy',
                    species: 'cat',
                    age: 3,
                    gender: 'm',
                    toys: ['bottlecap']
                }, {
                    name: 'Domino',
                    species: 'cat',
                    age: 1,
                    gender: 'm',
                    toys: ['fur mouse']
                }
            ]
        }, {
            name: "Homer Tedder",
            age: 44,
            pets: [{
                name: 'Puffball',
                species: 'cat',
                age: 7,
                gender: 'f',
                toys: ['scratching post']
            }]

        }, {
            name: "Rutha Janas",
            age: 22,
            pets: []
        }


    ],
}




function addShelterAnimal(name,species, age, gender,toys){
  shelterData.animals.push({
    'name':name,
    'species':species,
    'age':age,
    'gender':gender,
    'toys':toys
  });
}


function addClient(name, age, pets){
  shelterData.clients.push({
    'name':name,
    'age':age,
    'pets':pets
  })
}

function findClient(name){
  for (var i = 0; i < shelterData.clients.length; i++) {
    if (shelterData.clients[i].name === name){
      return shelterData.clients[i];
    }
  };
}

function findAnimal(name){
  for (var i = 0; i < shelterData.animals.length; i++) {
    if (shelterData.animals[i].name === name){
      return shelterData.animals[i];
    }
  };
  for (var i = 0; i < shelterData.clients.length; i++) {
    for (var j = 0; j < shelterData.clients[i].pets.length; j++) {
      if (shelterData.clients[i].pets[j].name === name){
        return shelterData.clients[i].pets[j];
      }
    };
  };
}

function addToy(animalName, toys){
  findAnimal(animalName).toys.push(toys);
}

function transferClientToShelter(clientName,animalName){
  shelterData.animals.push(findAnimal(animalName));
  for (var i = 0; i < findClient(clientName).pets.length; i++) {
    if (findClient(clientName).pets[i].name===animalName){
      delete findClient(clientName).pets[i];
    }
  };
}

function transferShelterToClient(clientName,animalName){
  findClient(clientName).pets.push(findAnimal(animalName));
  for (var i = 0; i < shelterData.animals.length; i++) {
    if (shelterData.animals[i].name === animalName){
      delete shelterData.animals[i];
    }
  };
}

function displayClientPets(){
  for (var i = 0; i < shelterData.clients.length; i++) {
    console.log(shelterData.clients[i].name + "   Number of pets: " +shelterData.clients[i].pets.length);
  };
}

var Shelter = function(name, address){
  this.name = name;
  this.address = address;
  this.animals = [];
  this.clients = [];
}
var Client = function(name, age, pets){
  this.name = name;
  this.age = age;
  this.pets = [];
  this.pets.push(pets);
}
 var Animal = function(name, species, age, gender, toys){
    this.name = name;
    this.species = species;
    this.age = age;
    this.gender = gender;
    this.toys = [];
    this.toys.push(toys);
 }

