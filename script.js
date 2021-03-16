let operator = '';
let a = null;
let b = null;
let result = null;

let displayId = document.querySelector('#display');
let p = document.createElement('p');
displayId.appendChild(p);

function add (a, b) {
    return result = a + b;
}

function subtract (a, b) {
    return result = a - b;
}

function multiply (a, b) {
    return result = a * b;
}

function divide (a, b) {
    return result = a / b;
}

function operate (operator, a, b) {
    switch (operator) {
        case "+": {
            return p.textContent = add (a, b);
        }
        case "-": {
            return p.textContent = subtract (a, b);
        }
        case "*": {
            return p.textContent = multiply (a, b);
        }
        case "/": {
            return p.textContent = divide (a, b);
        }
        default: {
            return console.log("Values accepted: + - * /");
        }
    }
}

// let operatorClick = function () {
//     if(!!b == false) {
//         a = p.textContent
//         b = 0;
//     }
//     if(!!result) return p.textContent = result;
//     if(!result) return;
// }

// number click events 
let $0 = document.querySelector("#zero");
$0.addEventListener("click", function(){
    return p.textContent += 0;
});
let $1 = document.querySelector("#one");
$1.addEventListener("click", function(){
    if(!!a == true) {
        p.textContent = 0;
        p.textContent += 1;
    }
});
let $2 = document.querySelector("#two");
$2.addEventListener("click", function(){
    return p.textContent += 2;
});
let $3 = document.querySelector("#three");
$3.addEventListener("click", function(){
    return p.textContent += 3;
});
let $4 = document.querySelector("#four");
$4.addEventListener("click", function(){
    return p.textContent += 4;
});
let $5 = document.querySelector("#five");
$5.addEventListener("click", function(){
    return p.textContent += 5;
});
let $6 = document.querySelector("#six");
$6.addEventListener("click", function(){
    return p.textContent += 6;
});
let $7 = document.querySelector("#seven");
$7.addEventListener("click", function(){
    return p.textContent += 7;
});
let $8 = document.querySelector("#eight");
$8.addEventListener("click", function(){
    return p.textContent += 8;
});
let $9 = document.querySelector("#nine");
$9.addEventListener("click", function(){
    return p.textContent += 9;
});

// operator click events

// display rules:
// - display number immediately on input
// - when new operation is performed, if(!!result == true), display previous operation's result,
// - if there is no previous operation, (no result), the value doesn't change 

let $add = document.querySelector("#add");
$add.addEventListener("click", function(){
    operator = "+";
    a = p.textContent;
    b = 0;
    // operatorClick();
});
let $subtract = document.querySelector("#subtract");
$subtract.addEventListener("click", function(){
    operator = "-";
    // operatorClick();
});
let $multiply = document.querySelector("#multiply");
$multiply.addEventListener("click", function(){
    operator = "*";
    // operatorClick();
});
let $divide = document.querySelector("#divide");
$divide.addEventListener("click", function(){
    operator = "/";
    // operatorClick();
});

let $clear = document.querySelector("#clear");
$clear.addEventListener("click", function(){
    p.textContent = 0;
    a = null;
    b = null;
});

let $equal = document.querySelector("#equal");
$equal.addEventListener("click", function(){
    b = p.textContent
    operate(operator, a, b)
});