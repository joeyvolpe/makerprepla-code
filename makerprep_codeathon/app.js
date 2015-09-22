function each(collection, callback){
  for (var i = 0; i < collection.length; i++){
    callback(collection[i]);
  }
}


function map(collection, callback){
  var results = [];
  each(collection, function(currentEl){
    results.push(callback(currentEl));
  });
  return results;
}


function filter(collection, predicate){
  var results = [];
  each(collection, function(currentEl){
    if (predicate(currentEl)) {
      results.push(collection(currentEl));
    }
  });
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


// EXERCISE 1

var numCoins = parseInt(prompt("How many coins would you like to trade in?"));
var coinArr = [];
for (var i = 0; i < numCoins; i++){
  coinArr.push(parseInt(prompt("What is the value of your #" + (i+1) + " coin?")));
}

console.log(coinArr);

function MKSToDollar(coinValue) {
  var dollarOutput = Math.floor(coinValue/2) + Math.floor(coinValue/3) + Math.floor(coinValue/4);
  $("body").append("<div>Your " + coinValue + " MKS coin converts to " + dollarOutput + " dollars!</div>");
  return dollarOutput;
}

console.log(map(coinArr, MKSToDollar));


// EXERCISE 2

var word = prompt("Enter a word.");

function hasHole(letter) {
}
