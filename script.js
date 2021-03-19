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
        // console.dir(e.target)
        const key = e.target; // set the clicked element (target) to a variable
        const action = key.dataset.action // set the target's data-action attribute to a variable. Use it to determine which action button was clicked
        let keyContent = key.textContent; // set the target's HTML text content to a variable!
        let displayedNum = display.textContent; // set display's (element with '.calculator__display') HTML text content to a variable 
        
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) // Cycles through all children nodes of parentNode (i.e. all keys) to remove class. It's run before class is added

        if(!action) { // therefore, is number button 
            if(display.textContent === '0'|| calculator.dataset.previousKeyType === 'operator' || calculator.dataset.previousKeyType === 'calculate') { // if either condition is true, sets display to key.textContent
                display.textContent = key.textContent; // (!) assign key value to display.textContent, not the equivalent JS variable, otherwise it won't live update 
                calculator.dataset.previousKeyType = "number";
            } else {
                display.textContent = display.textContent + key.textContent;
            } 
        }
        if(action == "add" ||
           action == "subtract" ||
           action == "multiply" ||
           action == "divide"
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = display.textContent; 
            if(firstValue && operator && calculator.dataset.previousKeyType !== 'operator') { // should calculate when firstValue and operator exist (secondValue always exists, so no need to check it), and if previousKeyType is not 'operator'
                display.textContent = calculate(firstValue, operator, secondValue);
                calculator.dataset.firstValue = display.textContent
            }
            key.classList.add('is-depressed')
            calculator.dataset.firstValue = display.textContent; // stores display.textContent to data-first-value attribute for .calculator element, for later use
            calculator.dataset.operator = action; // stores event target data-action attribute to data-operator attribute for .calculator element, for later use
            calculator.dataset.previousKeyType = 'operator'; // sets data-previous-key-type attribute for .calculator element, to determine if last key clicked was an operator
        }
        if(action == 'calculate') { // todo review this block
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = display.textContent;  // ?? not supposed to be const, as in guide
             
            if(firstValue) { // if operator has been hit 
                
                if(calculator.dataset.previousKeyType == 'calculate') {  // problem: if we hit calculate again, then it should -1 -1 -1 -1 every time
                    calculator.dataset.firstValue = display.textContent; // firstValue and display alternately change only every other click
                    secondValue = calculator.dataset.modValue; 
                }
                display.textContent = calculate(firstValue, operator, secondValue);  // !! only runs every other click. SHOULD set every click
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }

        if(action == 'decimal') { 
            if (calculator.dataset.previousKeyType == 'operator' || calculator.dataset.previousKeyType == "calculate") {
                display.textContent = "0.";
            } else if (!display.textContent.includes('.')){
                display.textContent += key.textContent; 
            }
            calculator.dataset.previousKeyType = 'decimal';       
        }
        if(action == 'clear') { 
            display.textContent = 0; //todo should make display 0, not disappear
            calculator.removeAttribute('data-first-value');
            calculator.removeAttribute('data-operator');
            calculator.dataset.previousKeyType = 'clear';
        }
    }
})

