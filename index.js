import {Calculator} from "./Calculator.js";

let calculator = new Calculator(0, 0);
let operations = new Array();
const ac = document.getElementById("clear");
const screen = document.getElementById("screen");
const options = document.body.getElementsByClassName("option");
const operators = document.body.getElementsByClassName("operator");
const equals = document.getElementById("equals");
let isOperatorSet = false;
let operator = "";
let firstArgument = -1;
let secondArgument = -1;

function clearScreen(){
    screen.innerHTML = "0";
}

ac.addEventListener("click", clearScreen);

equals.addEventListener("click", () => {
    calculator.arg1 = firstArgument;
    calculator.arg2 = secondArgument;
    let result = fetchResult();

    screen.innerHTML = result;
});


function fetchResult(){
    switch(parseInt(operator)){
        case Calculator.OperatorType.Sum:
            return calculator.sum();
        case Calculator.OperatorType.Minus:
            return calculator.minus();
        case Calculator.OperatorType.Times:
            return calculator.times();
        case Calculator.OperatorType.Divide:
            return calculator.divide();
    }
}
Array.from(options).forEach(o => o.addEventListener("click", () => {
   
    if(screen.innerHTML === "0"){
        screen.innerHTML = o.innerHTML;
    }
    else if(isOperatorSet && firstArgument !== -1 && secondArgument !== -1){
        calculator.accumulator = fetchResult();
        screen.innerHTML = o.innerHTML;
        firstArgument = parseInt(screen.innerHTML);
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