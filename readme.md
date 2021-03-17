Built with guidance from:
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

# Notes:
Check comments on index.html for learning points
Techniques to familiarize myself with:

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
- Use custom attributes to store input values!!
    - add data-set-previous-key-type to know if operator was the last key pressed. 
    - store the first number of a calculation in a custom attribute before we wipe it clean: calculator.dataset.firstValue = displayedNum
    - likewise, store the operator last clicked
- convert string to float number inline with parseFloat (parseInt also exists)
- Grab text content of HTML element using element.textContent
    - key.textContent grabs text content of HTML element assigned to key