let carName="volvo"
myFunction();

function myFunction(){
    document.getElementById("para").innerHTML=carName;
}

function myFunction(){
    let name="tata";
    console.log(name);
};

function myFunction(){
    var name="tata";
    console.log(name);
};

function myFunction(){
    const name="tata";
    console.log(name);
};

// variable name is same for all so one overrides the before finally only const name displays.