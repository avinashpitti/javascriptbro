// const

const PI=3.14
let radius;
let circumference;


document.getElementById("btn").onclick=function(){
radius=document.getElementById("inp").value ;
radius=Number(radius);
circumference=2*PI*radius;
document.getElementById("hh").textContent=circumference;
}


console.log(circumference);