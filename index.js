// change the datatype of a value to another(strings,numbers,booleans)
let a="pizza";
let b="pizza";
let c="pizza";

a=Number(a); // here it is considered as nan
b=String(b); // it is already a string
c=Boolean(c); // Boolean is considered as true if you give any kind of value except 0.


console.log(a,typeof a);
console.log(b,typeof b);
console.log(c,typeof c);

