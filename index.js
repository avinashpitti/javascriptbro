a=3; //never use without var let const
b=5;
c=a+b;

console.log(c);

let d;
d=33; // You can reassign but can't redeclare
let e=5;
let f=d+e;
console.log(f);

var g=3;
var g=44; // redclare 
var h;
var h=6; //reassign
var i=g+h;
console.log(i);

const j=3; // you can neither reassign nor redeclare
const k=5;
const l=j+k;
console.log(l);