let numbers = [1,2,3,4,5,6,7,8,9,10];
//console.log(numbers);

//MAP

//Arrow Function Syntax

let double = numbers.map(x => x * 2);            


////Normal Function
let dobule2 = numbers.map(function(x){
   return x = x * 2;
})
//
console.log(double,dobule2);
//
//
////FILTER is Even
////Arrow Function Syntax
let isEven = numbers.filter(x => x % 2 == 0); 
console.log(isEven);
////
////
//////Normal Function
let isEvenLoop = numbers.filter(function(x){
   return x = x % 2 == 0 ;
//});
//
console.log(isEvenLoop);
//                             
////FILTER is Odd
////Arrow Function Syntax
let isOdd = numbers.filter(x => x % 2);
console.log(isOdd);
//
//////Normal Function
let isOddLoop = numbers.filter(function(x){
   return x = x % 2;
});
console.log(isOddLoop);
//



