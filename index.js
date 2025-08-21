

let month=7;

switch(month){
    case 1:
        console.log("It is january");
        break;
    case 2:
        console.log("It is February");
        break;
        
    case 3:
        console.log("It is March");
        break;

    case 4:
        console.log("It is April");
        break;

    case 5:
        console.log("It is May");
        break;

    case 6:
        console.log("It is June");
        break;

    case 7:
        console.log("It is July");
        break;

    case 8:
        console.log("It is August");
        break;

    case 9:
        console.log("It is September");
        break;

    case 10:
        console.log("It is October");
        break;

    case 11:
        console.log("It is November");
        break;

    case 12:
        console.log("It is December");
        break;
};




document.getElementById("but").addEventListener("click",function(){
let marks=parseInt(document.getElementById("marks").value);
let grade;
let result=document.getElementById("result");


switch(true){
    case marks>=90:
        grade="A";
        result.style.color="green";
        break;

    case marks>=75:
        grade="B";
        result.style.color="lightgreen";
        break;

    case marks>=60:
        grade="C";
        result.style.color="yellowgreen";
        break;

    case marks>=50:
        grade="D";
        result.style.color="yellow";
        break;

    case marks>=40:
        grade="E";
        result.style.color="orange";
        break;

    case marks<40:
        grade="Fail";
        result.style.color="red";
        break;

    default:
        grade="Empty/Invalid input";
}

result.textContent="Grade of a student is "+grade;

});

