const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const display = calculator.querySelector('.calculator__display');
const previousKeyType = calculator.dataset.previousKeyType; // grabs DOM data attribute assigned to calculator class

const calculate = function (n1, operator, n2) {
    let result = '';

    if (operator == "add"){
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator == "subtract"){
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator == "multiply"){
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator == "divide"){
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')) { // element.matches() also looks for matches in DOM paths 
        console.dir(e.target)
        const key = e.target; // set the clicked element (target) to a variable
        const action = key.dataset.action // set the target's data-action attribute to a variable. Use it to determine which action button was clicked
        let keyContent = key.textContent; // set the target's HTML text content to a variable!
        let displayedNum = display.textContent; // set display's (element with '.calculator__display') HTML text content to a variable 
        
        if(!action) { // therefore, is number button
            console.log('number key!')
            if(display.textContent === '0'|| calculator.dataset.previousKeyType === 'operator') { // if either condition is true, sets display to key.textContent. TODO remove previousKeyType 'operator' after next number after operator is pressed, so that display updates properly after operator was pressed
                display.textContent = key.textContent; // assign the value to display.textContent, not the equivalent JS variable, otherwise it won't live update 
            } else {
                display.textContent = display.textContent + key.textContent;
            } 
        }
        if(action == "add" ||
           action == "subtract" ||
           action == "multiply" ||
           action == "divide"
        ) {
            console.log('operator key')
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'; // sets data-previous-key-type attribute for .calculator element, to determine if last key clicked was an operator
            calculator.dataset.firstValue = display.textContent; // stores display.textContent to data-first-value attribute for .calculator element, for later use
            calculator.dataset.operator = action; // stores event target data-action attribute to data-operator attribute for .calculator element, for later use
        }
        if(action == 'calculate') {
            console.log("equals key")
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = display.textContent; 
            calculate(firstValue, operator, secondValue); // TODO: display.textContent = result
        }
        if(action == 'decimal') {
            console.log("decimal key")
            display.textContent += key.textContent; // TODO: prevent multiple decimal points from being inserted
        }
        if(action == 'clear') {
            console.log("clear key")
            display.textContent = 0;
        }
        // Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) // TODO: remove after Mary hits number key again
    }
})

