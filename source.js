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
        
        case "x":
            return multiply(a,b);
        
        case "/":
            return divide(a,b);
        default:
            return "oops"; 
    }
}

function leftDigit(digit){
    if(!digit)
        l=0;
    else
        l=digit;
}

function rightDigit(digit){
    if(!digit)
        r=0;
    else
        r=digit;

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
        if(oprtr==null){
            leftDigit(parseInt(display.textContent));
        }
        else{
            rightDigit(parseInt(display.textContent));
        }
    });
} 

let enterNo=function(){
    
    let digits=document.querySelectorAll(".no");
    let display=document.querySelector(".input");
    digits.forEach((digit)=>{
        digit.addEventListener("click",(e)=>{
            if(oprtr==null){
                display.textContent+=e.target.textContent;
                leftDigit(parseInt(display.textContent));
                console.log("value of l "+l);
            }
            else{

                if(r===null){
                    display.textContent="";
                    display.textContent=e.target.textContent;
                    rightDigit(parseInt(display.textContent));
                }
                else{
                    display.textContent+=e.target.textContent;
                    rightDigit(parseInt(display.textContent));
                }

            }

        });
    });
}

function equality(){
    let equal=document.querySelector(".equal");
    let display=document.querySelector(".input");
    equal.addEventListener("click",(e)=>{
        if(r!=null){
           l=result=operate(l,oprtr,r);
           r=null;
           oprtr=null;
           display.textContent=result;
           console.log("result is "+ result);
        }
    });
}
enterNo();
deleteNo();
clickOperation();
equality();