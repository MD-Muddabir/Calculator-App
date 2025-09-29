const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const Addbtn = document.getElementById("Add") as HTMLButtonElement
const Subbtn = document.getElementById("Sub") as HTMLButtonElement
const Multibtn = document.getElementById("Multi") as HTMLButtonElement
const Divbtn = document.getElementById("Divide") as HTMLButtonElement

const printResult = document.getElementById("result") as HTMLOutputElement

function AddNumbers() {
    let a = parseFloat(number1.value);
    let B = parseFloat(number2.value);
    let result = a + B;
    printResult.textContent = result.toString();
}

Addbtn.addEventListener("click", AddNumbers)