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

const numberBtns = document.querySelectorAll(".displayNum");
numberBtns.forEach(numberBtn =>
  numberBtn.addEventListener("click", e => keystrokes.textContent = e.target.textContent)
);
