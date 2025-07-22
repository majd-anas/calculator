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
let l=null;
let oprtr=null;
let r=null;
let result=null;
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

function leftDigit(digit){
    if(!digit)
        l=0;
    else
        l=digit;
}

function getOperator(op){
    oprtr=op;
}

function clickOperation(){
    let o=document.querySelectorAll(".op");
    o.forEach(operation=>{
        operation.addEventListener("click",(e)=>{
            getOperator(e.target.textContent);
        });
    });
}


let deleteNo=function(){
    let del=document.querySelector(".delete");
    let display=document.querySelector(".input");
    del.addEventListener("click",()=>{
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        leftDigit(parseInt(display.textContent));
        console.log(l);
    });
} 

let enterNo=function(){
    
    let digits=document.querySelectorAll(".no");
    let display=document.querySelector(".input");
    digits.forEach((digit)=>{
        digit.addEventListener("click",(e)=>{
            display.textContent+=e.target.textContent;
            leftDigit(parseInt(display.textContent));
            console.log(l);
        });
    });
}

enterNo();
deleteNo();
clickOperation();