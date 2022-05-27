const display = document.getElementById('display');
let displayNumber = "12";
display.innerText = displayNumber;

const clearBtn = document.getElementById('clear');
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

function clear(){
    setDisplay("");
}

clearBtn.addEventListener('click', () => {
    clear();
} );


oneBtn.addEventListener('click', () => {
    display.innerText += "1";
} );

twoBtn.addEventListener('click', () => {
    display.innerText += "2";
} );

threeBtn.addEventListener('click', () => {
    display.innerText += "3";
} );

fourBtn.addEventListener('click', () => {
    display.innerText += "4";
} );

fiveBtn.addEventListener('click', () => {
    display.innerText += "5";
} );

sixBtn.addEventListener('click', () => {
    display.innerText += "6";
} );

sevenBtn.addEventListener('click', () => {
    display.innerText += "7";
} );

eightBtn.addEventListener('click', () => {
    display.innerText += "8";
} );

nineBtn.addEventListener('click', () => {
    display.innerText += "9";
} );

zeroBtn.addEventListener('click', () => {
    display.innerText += "0";
} );