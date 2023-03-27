import {Calculator} from "./Calculator.js";
import {OperatorType} from "./OperatorType.js";

let calculator = new Calculator();
const ac = document.getElementById("clear");
const screen = document.getElementById("screen");
const options = document.body.getElementsByClassName("option");
const operators = document.body.getElementsByClassName("operator");
const equals = document.getElementById("equals");

function clearScreen(){
    calculator.accumulator = 0;
    calculator.screen = "0";
    calculator.operator = OperatorType.None;
    setScreen();
}

ac.addEventListener("click", clearScreen);

equals.addEventListener("click", () => {
    calculator.accumulator = fetchResult();
    setScreen();
    calculator.accumulator = 0;
    calculator.operator = OperatorType.None;
    calculator.arg1 = 0;
    calculator.arg2 = 0;
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
        calculator.screen = o.innerHTML;
        setScreen();
    }
    else if(calculator.operator != OperatorType.None && calculator.arg1 !== -1 && calculator.arg2 !== -1){
        calculator.accumulator = fetchResult();
        calculator.arg1 = parseInt(o.innerHTML);
        setScreen();
    }
    else if(calculator.operator != OperatorType.None){
        calculator.arg2 = parseInt( o.innerHTML);
        console.log(`secondArgument: ${calculator.arg2}`);
        setScreen();
    }
    else{
        calculator.arg1 = parseInt(o.innerHTML);
        calculator.screen += o.innerHTML;
        setScreen();
    }

}));


Array.from(operators).forEach(o => o.addEventListener("click", () => {

    calculator.arg1 = parseInt(screen.innerHTML);
    console.log(`First argument: ${calculator.arg1}`);

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
            throw new Error("No operator was selected.");
    }
}));

function setScreen(){
    screen.innerHTML = calculator.accumulator !== 0 ? calculator.accumulator : calculator.screen;
}