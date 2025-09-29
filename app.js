var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var Addbtn = document.getElementById("Add");
var Subbtn = document.getElementById("Sub");
var Multibtn = document.getElementById("Mult");
var Divbtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
Addbtn.addEventListener("click", AddNumbers);
function SubtractNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
Subbtn.addEventListener("click", SubtractNumbers);
function MultiplyNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
Multibtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
Divbtn.addEventListener("click", DivideNumbers);
