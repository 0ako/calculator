function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    switch (operator) {
        case "+": {
            return add (a, b);
        }
        case "-": {
            return subtract(a, b);
        }
        case "*": {
            return multiply(a, b);
        }
        case "/": {
            return divide(a, b);
        }
        default: {
            return console.log("Values accepted: + - * /");
        }
    }
}

let output = 0;  
let oldWorkingNumber = 0;
let newWorkingNumber = 0;
let operator = '';

// number click events
let $0 = document.querySelector("#zero");
$0.addEventListener("click", function(){
    return display.textContent += 0;
});
let $1 = document.querySelector("#one");
$1.addEventListener("click", function(){
    return display.textContent += 1;
});
let $2 = document.querySelector("#two");
$2.addEventListener("click", function(){
    return display.textContent += 2;
});
let $3 = document.querySelector("#three");
$3.addEventListener("click", function(){
    return display.textContent += 3;
});
let $4 = document.querySelector("#four");
$4.addEventListener("click", function(){
    return display.textContent += 4;
});
let $5 = document.querySelector("#five");
$5.addEventListener("click", function(){
    return display.textContent += 5;
});
let $6 = document.querySelector("#six");
$6.addEventListener("click", function(){
    return display.textContent += 6;
});
let $7 = document.querySelector("#seven");
$7.addEventListener("click", function(){
    return display.textContent += 7;
});
let $8 = document.querySelector("#eight");
$8.addEventListener("click", function(){
    return display.textContent += 8;
});
let $9 = document.querySelector("#nine");
$9.addEventListener("click", function(){
    return display.textContent += 9;
});

// operator click events
let $add = document.querySelector("#add");
$add.addEventListener("click", function(){
    // Store the first number that is input into the calculator when a user presses an operator, 
    oldWorkingNumber = display.textContent;
    // and also save which operation has been chosen
    operator = "+";
    // clear the display
    display.textContent = 0;
});
let $subtract = document.querySelector("#subtract");
$subtract.addEventListener("click", function(){
    oldWorkingNumber = display.textContent;
    operator = "-";
    display.textContent = 0;
});
let $multiply = document.querySelector("#multiply");
$multiply.addEventListener("click", function(){
    oldWorkingNumber = display.textContent;
    operator = "*";
    display.textContent = 0;
});
let $divide = document.querySelector("#divide");
$divide.addEventListener("click", function(){
    oldWorkingNumber = display.textContent;
    operator = "/";
    display.textContent = 0;
});
 
// let divideByZero = function()(operate("/", oldWorkingNumber, 0)) display.textContent = 'lmao';

let $equal = document.querySelector("#equal");
$equal.addEventListener("click", function(){
    // and then operate() on them when the user presses the “=” key.
    oldWorkingNumber = Number(oldWorkingNumber);
    newWorkingNumber = display.textContent;
    newWorkingNumber = Number(newWorkingNumber);
    return display.textContent = operate(operator, oldWorkingNumber, newWorkingNumber)
});


let displayid = document.querySelector('#display');
let display = document.createElement('p');
displayid.appendChild(display)
display.textContent = output;


// console.log("10+5=" + add(10,5))
// console.log("10-5=" + subtract(10,5))
// console.log("10*5=" + multiply(10,5))
// console.log("10/5=" + divide(10,5))
// console.log("Operate " + operate("/", 10,5))