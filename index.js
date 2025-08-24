const hello =()=>console.log("Avinash is drastically changing.");
hello();

const numbers=[1,2,3,4,5,6];

const squares=numbers.map((Element)=>Math.pow(Element,2));
console.log(squares);

const cubes=numbers.map((Element)=>Math.pow(Element,3));
console.log(cubes);

const evenNumbers=numbers.filter((Element)=>Element%2===0,Element);
console.log(evenNumbers);

const oddNumbers=numbers.map((Element)=>Element%2!==0);
console.log(oddNumbers);

const total=numbers.reduce((accumulator,Element) =>accumulator+Element);
console.log(total);

