var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var Addbtn = document.getElementById("Add");
var Subbtn = document.getElementById("Sub");
var Multibtn = document.getElementById("Multi");
var Divbtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var B = parseFloat(number2.value);
    var result = a + B;
    printResult.textContent = result.toString();
}
