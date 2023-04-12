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
    let value1 = screen.innerHTML.split(/[+,-,*,\/]/)[0].trim();
    let value2 = screen.innerHTML.split(/[+,-,*,\/]/)[1].trim();
    calculator.arguments = [parseInt(value1), parseInt(value2)];
    calculator.screen = fetchResult();
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
    if(calculator.screen === "0"){
        calculator.screen = "";
    }
    calculator.screen += `${o.value}`;

    setScreen();

}));


Array.from(operators).forEach(o => o.addEventListener("click", () => {

    switch(parseInt(o.getAttribute("data-operator"))){
        case OperatorType.Sum:
            calculator.operator = OperatorType.Sum;
            calculator.screen += " + ";
            break;
        case OperatorType.Minus:
            calculator.operator = OperatorType.Minus;
            calculator.screen += " - ";
            break;
        case OperatorType.Times:
            calculator.operator = OperatorType.Times;
            calculator.screen += " * ";
            break;
        case OperatorType.Divide:
            calculator.operator = OperatorType.Divide;
            calculator.screen += " / ";
            break;
        default:
            calculator.operator = OperatorType.None;
    }

    setScreen();

}));

function setScreen(){
    screen.innerHTML = calculator.screen;
}