// Declaring Variables

let numberCurrent = "";
let prevNumber;
let currentOperator;
let Displayresult;

// Storing display
const display = document.getElementById("display");

// Storing Numbers
const numberButtons = Array.from(
    document.getElementsByClassName("button--number")
);

// Number Function

numberButtons.map((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberCurrent += e.target.innerText;
        display.innerText = numberCurrent;
    });
});

// Storing special keys

const specialButtons = Array.from(
    document.getElementsByClassName("button--special")
);

// Special keys function
specialButtons.map((special) => {
    special.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            // Clear
            case "AC":
                display.innerText = "";
                numberCurrent = "";
                prevNumber = "";
                // currNumberTwo = "";
                currentOperator = "";
                Displayresult = "";
                break;
            // Backspace
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
        }
    });
});

// Storing operators
const operators = Array.from(
    document.getElementsByClassName("button--operator")
);

// Operators function
operators.map((operator) => {
    operator.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        prevNumber = numberCurrent;
        currentOperator = e.target.innerText;
        display.innerText = currentOperator;
        numberCurrent = "";
    });
});

// Storing Equals Button
const equal = document.getElementById("equal");

// Equal Button Function
equal.addEventListener("click", (e) => {
    const finalNumberOne = parseFloat(prevNumber);
    const finalNumberTwo = parseFloat(numberCurrent);

    // Switch based on what operator is pressed
    switch (currentOperator) {
        case "+":
            Displayresult = finalNumberOne + finalNumberTwo;
            display.innerText = Displayresult;
            break;
        case "-":
            Displayresult = finalNumberOne - finalNumberTwo;
            display.innerText = Displayresult;
            break;
        case "x":
            Displayresult = finalNumberOne * finalNumberTwo;
            display.innerText = Displayresult;
            break;
        case "/":
            Displayresult = finalNumberOne / finalNumberTwo;
            display.innerText = Displayresult;
            break;
        case "÷":
            Displayresult = finalNumberOne / finalNumberTwo;
            display.innerText = Displayresult;
            break;
    }

    // Store result as new current number
    numberCurrent = Displayresult;
});
