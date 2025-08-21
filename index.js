

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


let marks=62;
let grade;

switch(true){
    case marks>=90:
        grade="A";
        break;

    case marks>=75:
        grade="B";
        break;

    case marks>=60:
        grade="C";
        break;

    case marks>=50:
        grade="D";
        break;

    case marks>=40:
        grade="E";
        break;

    case marks<40:
        grade="Fail";
        break;
};

console.log("Grade of a student is ",grade);

