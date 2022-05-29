const display = document.getElementById('display');
let displayNumber = display.innerText;
displayNumber = 0;

let firstNumber = "0";
let secondNumber = "0";
let result = "0";
let operator = "";
let isNew = true;






//all the number buttons
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const zeroBtn = document.getElementById('zero');

//all the operator buttons
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');



//functions for adding, subtracting, multiplying, and dividing
function add(a,b){
    return (parseFloat(a) + parseFloat(b));
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

function operate(op,a,b){
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

function clear(){
    setDisplay("");
}

function numberButton(x){
    if(isNew == true){
        display.innerText = x;
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += x;
        displayNumber = display.innerText;
        }
}

//click functionality for all of the number buttons
oneBtn.addEventListener('click', () => {
    numberButton("1")
});

twoBtn.addEventListener('click', () => {
    numberButton("2");
 } );

threeBtn.addEventListener('click', () => {
    numberButton("3");
} );

fourBtn.addEventListener('click', () => {
    numberButton("4");
} );

fiveBtn.addEventListener('click', () => {
    numberButton("5");
} );

sixBtn.addEventListener('click', () => {
    numberButton("6");
} );

sevenBtn.addEventListener('click', () => {
    numberButton("7");
} );

eightBtn.addEventListener('click', () => {
    numberButton("8");
} );

nineBtn.addEventListener('click', () => {
    numberButton("9");
} );

zeroBtn.addEventListener('click', () => {
    numberButton("0");
} );


//functionality for operators
clearBtn.addEventListener('click', () => {
    clear();
    displayNumber = 0;
    result = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
} );

addBtn.addEventListener('click', () => {
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,secondNumber);
        displayNumber = result;
        display.innerText = displayNumber;
        firstNumber = result;
        operator = "add";
        isNew = true;
    } else if(operator === ""){
        firstNumber = displayNumber;
        operator = "add";
        isNew = true;

    }
    
});

subtractBtn.addEventListener('click', () => {
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,secondNumber);
        displayNumber = result;
        display.innerText = displayNumber;
        firstNumber = result;
        operator = "subtract";
        isNew = true;
    } else if(operator === ""){
        firstNumber = displayNumber;
        operator = "subtract";
        isNew = true;

    }
});

multiplyBtn.addEventListener('click', () => {
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,secondNumber);
        displayNumber = result;
        display.innerText = displayNumber;
        firstNumber = result;
        operator = "multiply";
        isNew = true;
    } else if(operator === ""){
        firstNumber = displayNumber;
        operator = "multiply";
        isNew = true;

    }
});

divideBtn.addEventListener('click', () => {
    if(operator === "add" || operator === "subtract" || operator === "multiply" || operator === "divide"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,secondNumber);
        displayNumber = result;
        display.innerText = displayNumber;
        firstNumber = result;
        operator = "divide";
        isNew = true;
    } else if(operator === ""){
        firstNumber = displayNumber;
        operator = "divide";
        isNew = true;

    }
});

equalsBtn.addEventListener('click', () => {
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    console.log("EQUALS: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

});