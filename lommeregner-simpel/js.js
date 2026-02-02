const num1 = document.querySelector("#tal1");
const num2 = document.querySelector("#tal2");
const resultBtn = document.querySelector("#result");
const resultText = document.querySelector("#resultText");
const operator = document.querySelector("#regneart");

resultBtn.addEventListener("click", calculate);

function calculate() {
    let result;

    if (operator.value == "+") {
        result = num1.valueAsNumber + num2.valueAsNumber
        resultText.textContent = result;
    }

    else if (operator.value == "-") {
        result = num1.valueAsNumber - num2.valueAsNumber;
        resultText.textContent = result;
    }

    else if (operator.value == "*") {
        result = num1.valueAsNumber * num2.valueAsNumber;
        resultText.textContent = result;
    }

    else if (operator.value == "/") {
        result = num1.valueAsNumber / num2.valueAsNumber;
        resultText.textContent = result;
    }


}
