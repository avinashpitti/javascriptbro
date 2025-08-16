// change the datatype of a value to another(strings,numbers,booleans)
let age=window.prompt("How old are you?");
age+=1;
// here it considers as a string.
console.log(age,typeof age);

let years=window.prompt("how many years do you have?");
years=Number(years);
years+=1;
// here it considers as a number.
console.log(years,typeof years);

