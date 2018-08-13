const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const operate = (operator, a, b) => {
    return operator(a, b);
}

const keystrokes = document.querySelector(".keystrokes");
const numberBtns = Array.from(document.querySelectorAll(".calc-button"));

const newValueArray = [];
const displayVal = {};

const setDisplay = (e) => {
    if(e.target.id != "operator"){
        newValueArray.push(e.target.textContent);
        displayVal.newValue = parseInt(newValueArray.join(""));
        keystrokes.textContent = displayVal.newValue;
    } else {
        newValueArray.length = 0;
        displayVal.operator = e.target.textContent;
        keystrokes.textContent = 0;
    };
}

numberBtns.forEach(numberBtn =>
  numberBtn.addEventListener("click", e => setDisplay(e))
);
