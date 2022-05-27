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

//click functionality for all of the number buttons
oneBtn.addEventListener('click', () => {

    if(isNew == true){
    display.innerText = "1";
    displayNumber = display.innerText;
    isNew = false;
    } else {
    display.innerText += "1";
    displayNumber = display.innerText;
    }
} );

twoBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "2";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "2";
        displayNumber = display.innerText;
        }
} );

threeBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "3";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "3";
        displayNumber = display.innerText;
        }
} );

fourBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "4";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "4";
        displayNumber = display.innerText;
        }
} );

fiveBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "5";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "5";
        displayNumber = display.innerText;
        }
} );

sixBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "6";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "6";
        displayNumber = display.innerText;
        }
} );

sevenBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "7";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "7";
        displayNumber = display.innerText;
        }
} );

eightBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "8";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "8";
        displayNumber = display.innerText;
        }
} );

nineBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "9";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "9";
        displayNumber = display.innerText;
        }
} );

zeroBtn.addEventListener('click', () => {
    if(isNew == true){
        display.innerText = "0";
        displayNumber = display.innerText;
        isNew = false;
        } else {
        display.innerText += "0";
        displayNumber = display.innerText;
        }
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
    console.log("START OF ADD: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);
    isNew = true;
    
    if(operator === "subtract" || operator === "multiply" || operator === "divide"){
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    firstNumber = displayNumber;
    result = firstNumber;
    }
    else if(operator !== "add"){
    operator = "add";
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    firstNumber = displayNumber;
    result = firstNumber;
    
    console.log("END OF ADD: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    
    } else if(operator === "add"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,displayNumber);
        firstNumber = result;
        secondNumber = firstNumber;
        displayNumber = result;
        display.innerText = result;
        console.log("END OF ADD IF: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    }


});

subtractBtn.addEventListener('click', () => {
    console.log("START OF SUBTRACT: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);
    isNew = true;
    
    if(operator === "add" || operator === "multiply" || operator === "divide"){
        result = operate(operator,firstNumber,displayNumber);
        display.innerText = result;
        firstNumber = displayNumber;
        result = firstNumber;
        }

    else if(operator !== "subtract"){
    operator = "subtract";
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    firstNumber = displayNumber;
    result = firstNumber;
    
    console.log("END OF SUBTRACT: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    
    } else if(operator === "subtract"){
        firstNumber = result;
        result = operate(operator,firstNumber,displayNumber);
        firstNumber = result;
        secondNumber = firstNumber;
        displayNumber = result;
        display.innerText = result;
        console.log("END OF SUBTRACT IF: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    }

});

multiplyBtn.addEventListener('click', () => {
    console.log("START OF MULTIPLY: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);
    isNew = true;
    
    if(operator === "subtract" || operator === "add" || operator === "divide"){
        result = operate(operator,firstNumber,displayNumber);
        display.innerText = result;
        firstNumber = displayNumber;
        result = firstNumber;
        }
    
    else if(operator !== "multiply"){
    operator = "multiply";
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;    
    firstNumber = displayNumber;
    result = firstNumber;
    
    console.log("END OF MULTIPLY: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    
    } else if(operator === "multiply"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,displayNumber);
        firstNumber = result;
        secondNumber = firstNumber;
        displayNumber = result;
        display.innerText = result;
        console.log("END OF MULTIPLY IF: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    }
});

divideBtn.addEventListener('click', () => {
    console.log("START OF DIVIDE: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);
    isNew = true;
    
    if(operator === "subtract" || operator === "multiply" || operator === "add"){
        result = operate(operator,firstNumber,displayNumber);
        display.innerText = result;
        firstNumber = displayNumber;
        result = firstNumber;
        }
    
    else if(operator !== "divide"){
    operator = "divide";
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    firstNumber = displayNumber;
    result = firstNumber;
    
    console.log("END OF DIVIDE: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    
    } else if(operator === "divide"){
        secondNumber = displayNumber;
        result = operate(operator,firstNumber,displayNumber);
        firstNumber = result;
        secondNumber = firstNumber;
        displayNumber = result;
        display.innerText = result;
        console.log("END OF DIVIDE IF: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

    }

});

equalsBtn.addEventListener('click', () => {
    result = operate(operator,firstNumber,displayNumber);
    display.innerText = result;
    console.log("EQUALS: first: " + firstNumber + " second: " + secondNumber + " result: " + result + " displayNumber: " + displayNumber);

});