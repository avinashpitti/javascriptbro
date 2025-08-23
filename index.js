// Javascript errors:

// 1. syntax errors: If you make any mistake in syntax like missing the closing parenthesis.
// 2. Typeerror: example console.lag instead of log
// 3. Reference error: for ex: x=4; console.log(y); Instead of x you are refering y.

// try: Runs code that might fail

// catch: Catches the error and allows you to handle it

// finally: Runs always, even if there’s an error.

try{
    const dividend=Number(window.prompt("Enter a dividend: "));
    const divisor=Number(window.prompt("Enter a divisor: "));

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Inputs must be numbers");
    }

    if(divisor===0){
        throw new Error("can't divide by zero.");
    }

    const result=dividend/divisor;
    console.log(result);
}

catch(error){
    console.error(error);
}

finally{
    console.log("No matter what print this");
};