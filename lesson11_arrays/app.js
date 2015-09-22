var nums = [5, 10, 20, 50, 100, 250];

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[5]);
console.log(nums[6]);

var index = 4;
console.log(nums[index]);

var len = nums.length;
console.log(nums[len]);
console.log(nums[len-1]);


var words = ["Hello", "and", "welcome", "to", "my", "webpage!"];

words[0];
words[1];
words[5];
words[6];

var the_number_three = 3;
words[the_number_three];

var len = words.length;
words[len];
words[len - 1];


var all_kinds_of_stuff = ["Hello", 3, undefined, true, ["woah", "dude", "an array", "inside an array"], null];

all_kinds_of_stuff[0];
all_kinds_of_stuff[1];
all_kinds_of_stuff[5];
all_kinds_of_stuff[6];

var another_array = all_kinds_of_stuff[4];

// ?
console.log(another_array[0]);

// ?
console.log(all_kinds_of_stuff[4][1]);


// creating a new instance of an array is called instantiation
var arr = [];

// we can use bracket access in conjunction w/ the assignment operator
// to store a new value at that index
arr[0] = "0 is the new 1"
arr[1] = 45
arr[2] = null
arr[3] = true

arr[1] = "overwrite 45, just forget about that one, okay?"

console.log(arr);


// EXERCISE 1

var recipe = [];

recipe[0] = "Step 1: Get potato";
recipe[1] = "Step 2: Smash it";
recipe[2] = "Step 3: Add butter";
recipe[3] = "Step 4: Cook it";
recipe[4] = "Step 5: Eat it";

console.log(recipe[0]);

var lastStep = 4;

console.log(recipe[lastStep]);



var arr = ['stuff', 'more stuff', 'even more stuff'];

arr.length;

arr.push("More on the end!!!");
var lastItem = arr.pop();

arr.unshift("More at the beginning!!");
var firstItem = arr.shift();


// EXERCISE 2

var bucketList = [];

bucketList[0] = "skydive again";
bucketList[1] = "change the world";
bucketList.push("be succesful");
bucketList.push("eat chicken");
bucketList.unshift("live free or die hard");
bucketList.unshift("travel the world");

console.log(bucketList);
console.log(bucketList.length);

var dyingWish = bucketList.pop();
console.log(dyingWish);

var doItNow = bucketList.shift();
console.log(doItNow);

console.log(bucketList.length);


// EXERCISE 3

function print(arr) {
  var i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

print(recipe);
print(bucketList);


// EXERCISE 4

function reverser(arr) {
  // var i = 0;
  // var newArr = [];
  // while (i < arr.length) {
  //   newArr[i] = arr[arr.length-1-i];
  //   i++;
  // }
  // return newArr;

  var newerArr = [];
  for(var i = 0; i < arr.length; i++) {
    newerArr[i] = arr[arr.length-1-i];
  }
  return newerArr;
}

console.log(reverser(recipe));
console.log(reverser(bucketList));


// EXERCISE 5

function biggestSmallest(arr) {
  var newArr = [];
  newArr[0] = arr[0];
  newArr[1] = arr[1];
  for(var i = 0; i < arr.length-1; i++) {
    if (newArr[0] > arr[i+1]) {
      newArr[0] = arr[i+1];
    }
    else if (newArr[1] < arr[i+1]) {
      newArr[1] = arr[i+1];
    }
  }
  return newArr;
}

var ages = [3, 88, 9, 23, 15, 1, 29, 97];
console.log(biggestSmallest(ages));


// EXERCISE 6

function arrayDuplicator(inputArray) {
  var outputArray = [];
  outputArray = inputArray.slice();
  return outputArray;
}

console.log(arrayDuplicator(ages));

var original = [1, 2, 3, 4];
var duplicated = arrayDuplicator(original);

duplicated.pop();
duplicated.pop();
duplicated.pop();

console.log(original, duplicated); // should not be the same!


// EXERCISE 7

var friends = ['ada', 'will', 'bianca', 'abe'];
var enemies = ['john', 'alice'];

var frenemies = friends.concat(enemies);

console.log(frenemies);
console.log(friends, enemies); // does not change original arrays!

function arrayCombiner(arr1, arr2) {
  return arr1.concat(arr2);
}

var combinedArray = arrayCombiner([1, 2, 3], [4, 5, 6])
/* should print one array that contains all the values from array1
   and array 2 smooshed together */
console.log(combinedArray);


// EXERCISE 8

var frenemies = ['ada', 'will', 'bianca', 'abe', 'john', 'alice'];
var startingAtIndex = 3;
var numberToRemove = 2;

// Notice that like pop() and unshift(), splices returns the values it removes
var removedElements = frenemies.splice(startingAtIndex, numberToRemove);

console.log("We took out ", removedElements);
console.log("The remaining array ", frenemies);

function arrayPlucker(arr, indexToRemove) {
  var removedValue = arr.splice(indexToRemove, 1);
  return removedValue;
}

var daysOfSchool = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var dayOff = arrayPlucker(daysOfSchool, 4);

console.log("I'll go to school on: ", daysOfSchool);
console.log("but I'm taking vacation on ", dayOff);


// EXERCISE 9

// define array called words and fill it with vague responses
var words = ["nice!", "really?", "that's great", "i'm not sure", "ok, i guess", "if you say so", "hello"];
// prompt the user to ask a question
prompt("Ask me anything you want.");
// generates a random index number between 0 and the length of the array
var rand = Math.floor( Math.random() * words.length);

// alert the value in the words array that corresponds to the randomly generated index
alert(words[rand]);


// EXERCISE 10


// 1
var hello = false;

function check(arr) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === "hello") {
      hello = true;
    }
  }
  return hello;
}

console.log(check(words));


// 2

function check2(arr, targetValue) {
  var counter = 0;
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      counter++;
    }
  }
  return counter;
}

console.log(check2(ages, 3));


// 3

function oddIndexed(arr) {
  var newArr = [];
  for(var i = 1; i < arr.length; i+=2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(oddIndexed(ages));


// 4

function sumArray(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(ages));


// 5

function arrayMath(arr, operator) {
  var result = 0;
  var product = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if (operator === "+") {
      result += arr[i];
      if (i === arr.length-1) {
        return result;
      }
    }
    else if (operator === "-") {
      result -= arr[i];
      if (i === arr.length-1) {
        return result;
      }
    }
    else if (operator === "*") {
      if (i > 0) {
        product *= arr[i];
      }
      if (i === arr.length-1) {
        return product;
      }
    }
    else if (operator === "/") {
      if (i > 0) {
        product /= arr[i];
      }
      if (i === arr.length-1) {
        return result;
      }
    }
  }
}

console.log(arrayMath(ages, "+"));
console.log(arrayMath(ages, "-"));
console.log(arrayMath(ages, "*"));
console.log(arrayMath(ages, "/"));

console.log(arrayMath([4,2,3], "*")); ``


// 6

function zipper(arr1, arr2) {
  var newArr = [];
  if (arr1.length >= arr2.length) {
    for(var i = 0; i < (arr1.length + arr2.length); i++) {
      if (i % 2 === 0) {
        newArr.push(arr1[i]);
      }
      else if (i % 2 === 1) {
        if (i >= arr2.length*2) {
          newArr.push(arr1[i]);
        }
        else {
          newArr.push(arr2[i]);
        }
      }
    }
  }
  else if (arr2.length > arr1.length) {
    for(var i = 0; i < (arr2.length + arr1.length); i++) {
      if (i % 2 === 0) {
        if (i >= arr1.length*2) {
          newArr.push(arr2[i]);
        }
        else {
          newArr.push(arr1[i]);
        }
      }
      else if (i % 2 === 1) {
        newArr.push(arr2[i]);
      }
    }
  }
  return newArr;
}

nums = [1,2,3];
chars = ['a','b','c'];
console.log(zipper(nums, chars));



// *****************************
// RHUBARB ADMISSION APPLICATION
// *****************************


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnRandom(arr) {

    var randomIndex = Math.floor(Math.random() * 9) + 1;
    var randomNumber = arr[randomIndex];

    if (randomNumber % 3 === 0) {
        return "Rhubarb";
    }
    else if (randomNumber % 5 === 0) {
        return "Pie";
    }
    else {
        return randomNumber;
    }
}

console.log(returnRandom(array));



var number = "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901758595867578";

function formatNumber(num) {

  var formattedNum = "";
  var loop = Math.floor(num.length / 10);

  for(var i = 0; i < loop; i++) {
    for(var j = 0; j < 10; j++) {
      var newJ = j + i*10;
      if (j === 0) {
        formattedNum += "(";
      }
      else if (j === 3) {
        formattedNum += ")";
      }
      else if (j === 6) {
        formattedNum += "-";
      }
      formattedNum += num[newJ];
      if (j === 9 && i < loop - 1) {
        formattedNum += ", ";
      }
    }
  }
  return formattedNum;
}

console.log(formatNumber(number));
