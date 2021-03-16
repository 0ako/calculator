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

let oldWorkingNumber = null; // stored and hidden after operator is clicked
let newWorkingNumber = null;
let operator = '';
let operated = false; // an operator click sets it to true, 
// when true, next number click clears display, sets it to false, and displays number clicked. 

// number click events
let $0 = document.querySelector("#zero");
$0.addEventListener("click", function(){
    if (operated == true) {
        operated == false;
        display.textContent = 0;
    }
    return display.textContent += 0;
});
let $1 = document.querySelector("#one");
$1.addEventListener("click", function(){
    if (operated == true) {
        operated == false;
        display.textContent = 0;
    }
    return display.textContent += 1;
});
let $2 = document.querySelector("#two");
$2.addEventListener("click", function(){
    if (operated == true) {
        operated == false;
        display.textContent = 0;
    }
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
    operated = true;
    oldWorkingNumber = display.textContent;
    // console.log(`add. operator: ${operator}, old: ${oldWorkingNumber}, new: ${newWorkingNumber}`);
    // oldWorkingNumber = Number(oldWorkingNumber);
    // newWorkingNumber = Number(newWorkingNumber);
    operator = "+";
    // oldWorkingNumber = 0; // comment out for add?
    if (operator == true && oldWorkingNumber == true && newWorkingNumber == true) {
        display.textContent = operate(operator, oldWorkingNumber, newWorkingNumber);
    }
    // if values exist for old, new and operator, should operate endlessly
    // if (operator == true && oldWorkingNumber == true && newWorkingNumber == true) {
    // } else {
            // Store the first number that is input into the calculator when a user presses an operator, 
            // oldWorkingNumber = display.textContent;
            // oldWorkingNumber = Number(oldWorkingNumber);
            // newWorkingNumber = 0;
            // and also save which operation has been chosen
    });
// });
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
let $clear = document.querySelector("#clear");
$clear.addEventListener("click", function(){
    display.textContent = 0;
    oldWorkingNumber = null;
    newWorkingNumber = null;
});
let $delete = document.querySelector("#delete");
$delete.addEventListener("click", function(){
    // newWorkingNumber = newWorkingNumber.substr(0, (newWorkingNumber.length-1)); 
    // display.textContent = newWorkingNumber;
    display.textContent = display.textContent.substr(0, (display.textContent.length-1));
});
 
// let divideByZero = function()(operate("/", oldWorkingNumber, 0)) display.textContent = 'lmao';

// let $equal = document.querySelector("#equal");
// $equal.addEventListener("click", function(){

let $equal = function() {
    
    // and then operate() on them when the user presses the “=” key.
    newWorkingNumber = display.textContent;
    console.log(`equals. operator: ${operator}, old: ${oldWorkingNumber}, new: ${newWorkingNumber}`);
    oldWorkingNumber = Number(oldWorkingNumber);
    newWorkingNumber = Number(newWorkingNumber);
    oldWorkingNumber = operate(operator, oldWorkingNumber, newWorkingNumber);
    display.textContent = oldWorkingNumber;
    oldWorkingNumber = 0; // comment out for add?
    newWorkingNumber = 0;
};

// the display
let displayid = document.querySelector('#display');
let display = document.createElement('p');
displayid.appendChild(display)
display.textContent = 0;


// console.log("10+5=" + add(10,5))
// console.log("10-5=" + subtract(10,5))
// console.log("10*5=" + multiply(10,5))
// console.log("10/5=" + divide(10,5))
// console.log("Operate " + operate("/", 10,5))