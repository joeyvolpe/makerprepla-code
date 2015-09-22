// EXERCISE 1

var myCat = {};

myCat.name = "Chalupa";
myCat.age = 17;
myCat.alive = true;
myCat.favoriteToy = "rubber chalupa";
myCat.nappingSpot = "storm drain";
myCat.color = "orange";
myCat.demeanor = "angry";


// EXERCISE 2

var myDreamLife = {};

var propertyKey = 'job';
myDreamLife[propertyKey] = 'web developer';

var anotherPropertyKey = 'salary';
myDreamLife[anotherPropertyKey] = 100000;

console.log(myDreamLife[propertyKey]);
console.log(myDreamLife['job']);

var nextProperty = 'car';
myDreamLife[nextProperty] = 'Tesla';

console.log(myDreamLife[nextProperty]);
console.log(myDreamLife['car']);

var houseProperty = 'house';
var relationshipProperty = 'relationship';
var contentProperty = 'content';

myDreamLife[houseProperty] = 'mansion';
myDreamLife[relationshipProperty] = 'married';
myDreamLife[contentProperty] = true;

console.log(myDreamLife);


// EXERCISE 3

var car = {
  make: "Toyota"
};

car["model"] = "Camry";
console.log(car["model"]);
console.log(car.model);

car.model = "Prius";
console.log(car["model"]);
console.log(car.model);

var prop = 'year';
car[prop] = '2010';
console.log(car["nothinghere"]);
console.log(car.nothinghere);

var dreamCar = {};

dreamCar.make = 'Tesla';
dreamCar.model = 'Model X';
dreamCar.color = 'black';
dreamCar.year = 2016;
dreamCar.registered = true;

console.log(dreamCar);


// EXERCISE 4

var demo_object = {
    one: 1,
    two: 2,
    three: 3
};
var one = "three";

demo_object['two']; // 2
demo_object[one]; // 3

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
};

var place = 'California';

state_capitals['place'] // undefined
state_capitals.place   // Sacramento
state_capitals[place] // Sacramento

state_capitals['California']; // Sacramento
state_capitals.California;   // Sacramento
// state_capitals[California]; // undefined


// EXERCISE 5

var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
};

for (var key in obj) {
    console.log(obj[key]); //why don't we need quotes around key? A: it's not a string, it's a variable
    // what would happen if we logged obj.key instead? Why? Test it. A: doesn't work, no key property
};

for (var trait in myCat) {
  console.log(myCat[trait]);
}

for (var property in myDreamLife) {
  console.log(myDreamLife[property]);
}

for (var stat in dreamCar) {
  console.log(dreamCar[stat]);
}

for (var key in obj) {
  if (key === 'color') {
    console.log(obj[key]);
  }
}

var targetKey = 'greeting';
obj[targetKey] = 'Hello Sasquatch, are you from Albania?';
for (var key in obj) {
  if (key === 'greeting') {
    console.log(obj[key]);
  }
}


// EXERCISE 6

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

var allPoliticos = '';

for (var politico in politicos) {
  allPoliticos += politicos[politico] + ' ';
}

console.log(allPoliticos);

for (var politico in politicos) {
  console.log(politico + ': ' + politicos[politico]);
}


// EXERCISE 7

var reverse_politico_lookup = {};

for (var politico in politicos) {
  reverse_politico_lookup[politicos[politico]] = politico;
}

console.log(reverse_politico_lookup);


// EXERCISE 8

var complex_object = {
  string: "I'm a string!",
  number: 42,
  //don't worry about this too much yet, just accept thats its a different data type
  array: ["all sorts of stuff", 10, true, undefined, function(){console.log('beepity-beep')}],
  //we haven't covered functions yet either, just accept that they too can be stored in objects
  fn: console.log,
  //Now THIS is interesting, an object INSIDE of an object!?
  simple_object: {name: 'bob', location: 'basement', happy: 'false'}
};

console.log(complex_object.string);
console.log(complex_object.array);
console.log(complex_object.simple_object.name);
// complex_object.fn("print me!"); //works on jsfiddle

for (var key in complex_object.simple_object) {
  console.log(complex_object.simple_object[key]);
}

var object1 = {
  object2: {
    object3: {
      object4: {name: "joey", age: "27", bacon: true}
    }
  }
}

console.log(object1);
