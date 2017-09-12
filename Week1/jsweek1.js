
// give x an integer number
let k = 6;
console.log("k equales " + k);

// the nearest integer to 7.25
let rightNumber = Math.round(7.25);
console.log("the nearest integer to 7.25 is " + rightNumber);

// Colors Array
let colors = ["blue", "green", "red"];
console.log("the lenght of the colors array is " + colors.length);

// comparing types
let s = "string";
let n = 65 ;
console.log (typeof s);
console.log (typeof n);

if (typeof s == typeof n) {
  console.log("sameType")
} else {
  console.log("differentTypes")
}

// different types in one array
let multiTypeArray = ["notString", 33, false];
console.log("This Array contains " + multiTypeArray.length + " different types of objects");
console.log("first array's item is " + typeof(multiTypeArray[0]));
console.log("second array's item is " + typeof(multiTypeArray[1]));
console.log("third array's item is " + typeof(multiTypeArray[2]));
