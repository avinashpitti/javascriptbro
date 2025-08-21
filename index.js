let game="cricket";
let captain="Ms Dhoni";
let batter="sachin"

if(game=="ricket"){
    console.log("Indian cricket captain is ",captain);
}

else if(batter=="achin"){
    console.log(batter," is the best batter");
}

else{
    console.log("neither captain nor batter")
}


let x=100;
let y=50;
let z=200;

if(x>y && x>z){
    console.log("x is the greatest number");
}
else if(x>y && x<z){
    console.log("x is just greater than y");
}
else{
    console.log("x is the smallest number")
}




document.getElementById("but").addEventListener("click",function(){
let day=document.getElementById("day").value.toLowerCase();

// if we have to give both short forms and long forms
if(day=='mon' || day=='monday'){
    console.log("Monday");
}

else if(day=='tue'){
    console.log("Tuesday");
}

else if (day=='wed'){
    console.log("Wednesday");
}

else if (day=='thu'){
    console.log("Thursday");
}

else if (day=='fri'){
    console.log("Friday");
}

else if(day=='sat'){
    console.log("Saturday");
}

else if(day=="sun"){
    console.log("Sunday");
}

else{
    console.log("You entered wrong word");
}});