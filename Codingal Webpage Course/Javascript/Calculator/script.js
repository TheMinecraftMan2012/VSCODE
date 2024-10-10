function add()
{
  let num1 = prompt("Enter First Number");
  let num2 = prompt("Enter Second Number");

  let x = Number(num1);
  let y = Number(num2);
  let sum = x + y;

  document.getElementById("display").innerHTML = sum;
}
function subtract()
{
  let num1 = prompt("Enter First Number");
  let num2 = prompt("Enter Second Number");

  let x = Number(num1);
  let y = Number(num2);
  let sum = x - y;

  document.getElementById("display").innerHTML = sum;
}
function multiply()
{
  let num1 = prompt("Enter First Number");
  let num2 = prompt("Enter Second Number");

  let x = Number(num1);
  let y = Number(num2);
  let sum = x * y;

  document.getElementById("display").innerHTML = sum;
}
function divide()
{
  let num1 = prompt("Enter First Number");
  let num2 = prompt("Enter Second Number");

  let x = Number(num1);
  let y = Number(num2);
  let sum = x / y;

  document.getElementById("display").innerHTML = sum;
}