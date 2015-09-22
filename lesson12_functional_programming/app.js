var numArray = [1,2,3,4,5];
var myObj = {
  prop1: "hello",
  prop2: "goodbye",
  prop3: "afternoon"
}

// function logger(currentElement){
//   console.log(currentElement);
// }

var logger = function(currentElement){
  console.log(currentElement);
}

// function doubler(currentElement){
//   return currentElement * 2;
// }

var doubler = function(currentElement){
  return currentElement * 2;
}

console.log(map(numArray, doubler));






// **********************
// HIGHER ORDER FUNCTIONS
// **********************


function each(collection, callback){
  if (Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  }
  else {
    for(var key in collection) {
      callback(collection[key]);
    }
  }
}


function map(collection, callback){
  var results = [];
  each(collection, function(currentElement){
    results.push(callback(currentElement));
  });
  return results;
}


function filter(collection, predicate){
  var results = []; // var results = []; statelessness

  each(collection, function(currentEl){
    if (predicate(currentEl)){
      results.push(currentEl);
    }
  })
  return results;
}


function reduce(collection, callback, initialValue){
  var counter = 0, total = 0;

  if (collection.length === 0){
    return collection;
  }

  if (arguments.length === 2){
    counter = 1;
    total = collection[0];
  }
  else if (arguments.length >= 3){
    counter = 0;
    total = initialValue;
  }
  else {
    throw "NO NO";
  }

  while (counter < collection.length){
    total = callback(total, collection[counter]);
    counter++;
  }
  return total;
}


function contains(collection, target){
  return reduce(collection, function(wasFound, item){
    if (wasFound) {
      return true;
    }
    return item === target;
  }, false);
}


var numArray = [1,2,3,4,5];

function adder = function(total, currentVal){
  return total + currentVal;
}

var sum = reduce(numArray, adder);

console.log(sum);



var newReleases = [{
    "id": 70111470,
        "title": "Space Balls",
        "boxart": "http://d.ratingmovies.com/servlet/Main/CoverDisplay/Spaceballs_(1987).jpg?film_rn=144",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": []
}, {
    "id": 654356453,
        "title": "The Two Towers",
        "boxart": "https://upload.wikimedia.org/wikipedia/en/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{
        id: 432534,
        time: 65876586
    }]
}, {
    "id": 65432445,
        "title": "Speed",
        "boxart": "http://www.mediacircus.net/speed_______________11.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
}, {
    "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 2.5,
        "bookmark": [{
        id: 432534,
        time: 65876586
    }]
}];



$('.target-box').click(function(){

  var bestMovies = filter(newReleases, function(movie){
    return movie.rating >= 4.0;
  })
  console.log(bestMovies);
  var titles = map(bestMovies, function(movie){
    return movie.title;
  })
  console.log(titles);
  each(titles, function(title){
    $('.title-box').append(title);
  })
})



// filter and reduce practice

function each(collection, callback){
  for (var i = 0; i < collection.length; i++){
    callback(collection[i]);
  }
}


function map(collection, callback){
  var results = [];
  each(collection, function(currentEl){
    results.push(callback(collection[currentEl]);
  }
  return results;
}


function filter(collection, predicate){
  var results = [];
  each(collection, function(currentEl){
    if (predicate(currentEl)) {
      results.push(collection(currentEl));
    }
  }
  return results;
}


function reduce(collection, callback, initialValue){
  var accumulator;
  var index;
  // check for initial value
  if (arguments.length >= 3){
    total = initialValue;
    index = 0;
  }
  else {
    accumulator = collection[0];
    index = 1;
  }
  // add accumulator
  while(index < collection.length){
    // (below) runs the callback function on accumulator, then collection[index]
    accumulator = callback(accumulator, collection[index]);
    index++;
  }
  // alternative 'add accumulator' with for a loop
  // for (index; index < collection.length; index++){
  //   accumulator = callback(accumulator, collection[index]);
  // }
  return accumulator;
}


function contains(collection, target) {
  return reduce(collection, function(wasFound, item){
    if (wasFound){
      return true;
    }
    return item === target;
  }, false);
}
