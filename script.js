const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        // console.log(e)
        const key = e.target;
        const action = key.dataset.action // DOM path: target.dataset.action 
        let keyContent = key.textContent; // !! this grabs textContent from key variable
        let displayedNum = display.textContent;
        
        if(!action) { 
            console.log('number key!')
            if(displayedNum == '0') {
                display.textContent = keyContent; // !! must assign value to element.textContent, otherwise textContent won't update on the page
            } else {
                display.textContent += keyContent;
            } 
        }
        if(action == "add" ||
           action == "subtract" ||
           action == "multiply" ||
           action == "divide"
        ) console.log('operator key')
        if(action == 'calculate') console.log("equals key")
        if(action == 'decimal') console.log("decimal key")
        if(action == 'clear') console.log("clear key")

    }
})

