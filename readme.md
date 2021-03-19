Built with guidance from:
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

# Notes:

Biggest challenge when building a calculator: chaining operations together: 12 + 7 - 5 * 3 = should yield 42

Check comments on index.html for learning points
Techniques to familiarize myself with:

- Understand all the rules of a calculator before writing code:
    - The calculator should treat first and second values as the same numbers if it's missing a value. i.e. 2 + = 4

- Determining and building out the happy path first! (average user flow)
- The console.log() method prints out a toString representation of the object in the console to the user.
- The console.dir() method output the list of object properties of a specified object in the console to the user.
    - console.dir(e.target); prints DOM elements in Chrome console! Provides actionable information on the target of event

- CSS grid
- Assigning and using data-action attributes
    - For all operator keys, clear, decimal and equals key 
- DOM methods:
    - Listen to all keypresses and determining which key/type was pressed: 
- Happy path programming: 
    - User hits number, decimal, operator, number...
        - When user hits number:
            - If calculator shows 0, target number replaces it (Find out current displayed number using .calculator__display)
            - If calculator shows non-zero number, append target number to displayed number (Find using textContent)
- Add class to element with CSS changes to highlight button changes
    - add is-depressed to key to operator key to highlight pressed
- Remove class from all keys using forEach loop
    - 
- Use custom attributes to store previously inputted values!!
    - add data-set-previous-key-type to know if operator was the last key pressed. 
    - store the first number of a calculation in a custom attribute before we wipe it clean: calculator.dataset.firstValue = displayedNum
    - likewise, store the operator last clicked
- convert string to float number inline with parseFloat (parseInt also exists)
- Grab text content of HTML element using element.textContent
    - key.textContent grabs text content of HTML element assigned to key
- Use forEach with Array.from() to cycle through every element in a nodeList
    - To remove a class from all the children nodes of a parentNode
    - Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
- To prevent something from being inputted more than once, use includes()
    - if(!display.textContent.includes('.'))
- Just add new rules/conditions if you need them!
    - If calculate should only run when operator has been clicked, i.e. firstValue exists, just use if(firstValue)
    - If the display.textContent needs to show "0." when previousKeyType is "operator" just add the conditional statement!
        - if(calculator.dataset.previousKeyType == "operator") {display.textContent = "0."}
- Just append new conditions to existing ones!
- WRITE IT OUT! To understand chains of functions (flowcharts) Write down what is happening with our function AND what is SUPPOSED to happen with our function.
    - To understand our calculate function, and which values need to be assigned to which variables to chain calculations together, get it down on paperrrr