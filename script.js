const display = document.getElementById('display');
let displayNumber = "1";
console.log(typeof display);
console.log(display);
console.log(display.id);
display.innerText = displayNumber;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return Math.round((a/b) * 100) / 100;
}

function setDisplay(a){
    display.innerText = a;
}

function calculate(op,a,b){
    if(op==="add"){
        return add(a,b);
    }else if(op==="subtract"){
        return subtract(a,b);
    }else if(op==="multiply"){
        return multiply(a,b);
    }else if(op==="divide"){
        return divide(a,b);
    }else return "oops! invalid operator";
}

