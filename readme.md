Built with guidance from:
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

# Notes:
Check !! comments on index.html for learning points
Techniques to familiarize myself with:

- CSS grid
- Assigning and using data-action attributes
    - For all operator keys, clear, decimal and equals key 
- DOM methods:
    - Listen to all keypresses and determining which key/type was pressed: 
- Determining and building out the happy path first (average user flow)
    - Happy path: user hits number, decimal, operator, number...
        - When user hits number:
            - If calculator shows 0, target number replaces it (Find out current displayed number using .calculator__display)
            - If calculator shows non-zero number, append target number to displayed number (Find using textContent)