//count program
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countLabel=document.getElementById("countLabel");

let count=0;

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}

// here if condition don't let it fall below zero.
decreaseBtn.onclick=function(){
    if(count>0){
    count--;
    countLabel.textContent=count;}
}

resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}