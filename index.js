// change the datatype of a value to another(strings,numbers,booleans)
let a="pizza";
let b="pizza";
let c="pizza";
let d="";
let e="0";

a=Number(a); // here it is considered as nan
b=String(b); // it is already a string
c=Boolean(c); // Boolean is considered as true if you give any kind of value except null.
d=Boolean(d); //here it is false because of null value
e=Boolean(e); // here it is true because we have given some value.


console.log(a,typeof a);
console.log(b,typeof b);
console.log(c,typeof c);
console.log(d,typeof d);
console.log(e,typeof e);

