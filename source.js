//the operations
let add=function(a,b){
    return a+b;
}

let subtract=function(a,b){
    return a-b;
}

let multiply=function(a,b){
    return a*b;
}

let divide=function(a,b){
    return a/b;
}

//operation variables
let l,oprtr,r,result;

//operation function
let operate =function(a,o,b){
    switch(o){
        case "+":
            return add(a,b);
        
        case "-":
            return subtract(a,b);
        
        case "*":
            return multiply(a,b);
        
        case "/":
            return divide(a,b);
    }
}

