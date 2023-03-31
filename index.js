import {Calculator} from "./Calculator.js";
import {OperatorType} from "./OperatorType.js";

let calculator = new Calculator();
const ac = document.getElementById("clear");
const screen = document.getElementById("screen");
const options = document.body.getElementsByClassName("option");
const operators = document.body.getElementsByClassName("operator");
const equals = document.getElementById("equals");

function allClear(){
    calculator.allClear();
    setScreen();
}

ac.addEventListener("click", allClear);

equals.addEventListener("click", () => {
    calculator.accumulator = fetchResult();
    setScreen();
    calculator.reset();
});

function fetchResult(){
    switch(calculator.operator){
        case OperatorType.Sum:
            return calculator.sum();
        case OperatorType.Minus:
            return calculator.minus();
        case OperatorType.Times:
            return calculator.times();
        case OperatorType.Divide:
            return calculator.divide();
        default:
            throw new Error("No operator was selected.");
    }
}
Array.from(options).forEach(o => o.addEventListener("click", () => {
   
    calculator.screen = o.innerHTML;
    
    if(calculator.operator == OperatorType.None && calculator.arg1 === -1){
        calculator.arg1 = parseInt(o.innerHTML);
    }
    else if(calculator.operator !== OperatorType.None && calculator.arg1 === -1){
        calculator.arg1 = parseInt(o.innerHTML);
        calculator.accumulator = fetchResult();
    }
    else if(calculator.operator !== OperatorType.None && calculator.arg2 === -1){
        calculator.arg2 = parseInt( o.innerHTML);
        calculator.screen = o.innerHTML;
    }
    else if(calculator.operator !== OperatorType.None && calculator.arg2 === -1){
        calculator.arg2 = parseInt(o.innerHTML);
        calculator.accumulator = fetchResult();
    }
    else{
        calculator.arg1 = -1;
        calculator.arg2 = -1;
    }

    setScreen();

}));


Array.from(operators).forEach(o => o.addEventListener("click", () => {

    switch(parseInt(o.getAttribute("data-operator"))){
        case OperatorType.Sum:
            calculator.operator = OperatorType.Sum;
            break;
        case OperatorType.Minus:
            calculator.operator = OperatorType.Minus;
            break;
        case OperatorType.Times:
            calculator.operator = OperatorType.Times;
            break;
        case OperatorType.Divide:
            calculator.operator = OperatorType.Divide;
            break;
        default:
            calculator.operator = OperatorType.None;
    }

}));

function setScreen(){
    screen.innerHTML = calculator.accumulator !== 0 ? calculator.accumulator : calculator.screen;
}