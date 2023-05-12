var num1 = 100;
var num2 = 200;
// Output --> num1 = 200,  num2 =100

console.log("Before Swap..", "num1: ", num1, " num2: ", num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log("num1:", num1, " num2:", num2);

console.log("------------------------------");

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);