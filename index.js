
mini=Math.min(23,56,4,100,21);
maxi=Math.max(23,56,4,100,21);
a=Math.random(); // It gives the random value between 0 and 1
b=Math.random()*10; // It gives the random value between 0 and 10 
b1=(Math.random()*10)+5;
c=Math.floor(Math.random()*10) // It gives the random value between 0 and 9 but rounded down to nearest integer



console.log("The minimum value is ",mini);
console.log("The maximum value is ",maxi);
console.log(a);
console.log(b);
console.log("It gives the random value between 5 and 15 ",b1);
console.log("It gives the random value between 0 and 9",c);

x=3.4;

console.log(x); // It gives the exact value
console.log("It rounded off to the nearest integer ", Math.round(x))
console.log("It rounded down ",Math.floor(x));
console.log("It rounded up ",Math.ceil(x));
console.log("It eliminates the decimal ",Math.trunc(x));
console.log(Math.sign(x));//It returns 1 if x is positive. 0 if it is 0. -1 if it is negative.

p=3;
q=4;

console.log("The power(3^4) of two numbers is ",Math.pow(p,q));
console.log("The square root of q(4) is ",Math.sqrt(q));

console.log("The value of pi is ",Math.PI); // PI and E are mathematical constansts not functions
console.log("The value of e is ",Math.E);

// Math.sin() function in javascript expects an angle in radians, not degrees 
let degrees=30;
let radians=degrees*(Math.PI/180);
console.log("sin30 value is ", Math.sin(radians));

let degree=45;
let tan45=degree*(Math.PI/180);
console.log("The value of tan45 is ",Math.tan(tan45));




