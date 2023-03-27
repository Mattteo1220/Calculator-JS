import Calculator from "./Calculator.js";

const OperatorType = {
    "Sum" : 1,
    "Minus" : 2,
    "Times" : 3,
    "Divide" : 4
}

const ac = document.getElementById("clear");
const screen = document.getElementById("screen");
const options = document.body.getElementsByClassName("option");
const operators = document.body.getElementsByClassName("operator");
const equals = document.getElementById("equals");
let isOperatorSet = false;
let operator = "";
let firstArgument = 0;
let secondArgument = 0;

function clearScreen(){
    screen.innerHTML = "0";
}

ac.addEventListener("click", clearScreen);

equals.addEventListener("click", () => {
    let result = 0;
    switch(parseInt(operator)){
        case OperatorType.Sum:
            result = Calculator.sum(firstArgument, secondArgument);
            break;
        case OperatorType.Minus:
            result = Calculator.minus(firstArgument, secondArgument);
            break;
        case OperatorType.Times:
            result = Calculator.product(firstArgument, secondArgument);
            break;
        case OperatorType.Divide:
            result = Calculator.remainder(firstArgument, secondArgument);
            break;
    }

    screen.innerHTML = result;
});

Array.from(options).forEach(o => o.addEventListener("click", () => {
   
    if(screen.innerHTML === "0"){
        screen.innerHTML = o.innerHTML;
    }
    else if(isOperatorSet){
        screen.innerHTML = o.innerHTML;
        secondArgument = parseInt( screen.innerHTML);
        console.log(`secondArgument: ${secondArgument}`);
        isOperatorSet = false;
    }
    else{
        screen.innerHTML += o.innerHTML;
    }

}));


Array.from(operators).forEach(o => o.addEventListener("click", () => {

    firstArgument = parseInt(screen.innerHTML);
    console.log(`First argument: ${firstArgument}`);

    operator = o.dataset.operator;
    isOperatorSet = true;

}));





export default {
    screen
}