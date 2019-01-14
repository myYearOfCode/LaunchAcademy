// to convert string to int EXPLICITLY
parseInt(stringVarName);
// implicitly
let newInt = (stringVarName * 1);
// to convert an int to a string EXPLICITLY
intVarName.toString();
// IMPLICITLY
let newString = intVarName + "";

// popup box with text entry
prompt("what would you like your box to say?")

// map allows you to run a function on each element of an array
// and then you save it to a variable.
let outString = arrayName.map(whatYouCallTheSingleElement => {
  console.log("I have a " + whatYouCallTheSingleElement)
})

// filter is similar to map, but it takes in an array and a boolean test
// and returns a new array with elements that passed the boolean test
function findOdds(numArray) {
  return numArray.filter(num => num % 2 > 0);
}
// if you try to do anything else in the boolean area it will fail.
// you can't even log in there. 
