let textField = document.querySelector(".textField");
let button = document.querySelectorAll("button");
//Note querySelectorAll



button.forEach(btn =>{btn.addEventListener("click", () => {
  textField.innerHTML+=btn.value;
})});
//Note forEach


let num1= parseInt(textField.innerHTML);
let oper = "";
let num2= parseInt(textField.innerHTML);

//Note ::: Need function that takes num1, an operator, and num2



