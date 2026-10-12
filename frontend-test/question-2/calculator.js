const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const math = document.getElementById("math");
const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", function () {
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let result;

    switch (math.value) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if (b === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = a / b;
            break;
    }

    document.getElementById("result").textContent = "Result: " + result;
});
