import {OperatorType} from "./OperatorType.js";

class Calculator{
    constructor(){
        this._arguments = new Array();
        this._screen = "0";
        this._operator = OperatorType.None;
        this._accumulator = 0;
    }

    get accumulator(){
        return this._accumulator;
    }

    set accumulator(val){
        this._accumulator = val;
    }

    get screen(){
        return this._screen;
    }

    set screen(val){
        this._screen = val;
    }

    get arguments(){
        return this._arguments;
    }

    set arguments(arg){
        this._arguments = arg;
    }

    get operator(){
        return this._operator;
    }

    set operator(val){
        this._operator = val;
    }

    addArgument(arg){
        this._arguments.push(arg);
    } 

    allClear(){
        this._arguments = new Array();
        this._operator = OperatorType.None;
        this._screen = "0";
        this._accumulator = 0;
    }

    reset(){
        this.arguments = [this._accumulator];
        this.operator = OperatorType.None;
        this.accumulator = this._accumulator !== 0 ? this._accumulator : 0;
        this.screen = this._accumulator !== 0 ? this._accumulator : 0;
    }

    sum(){
        return this.arguments.reduce((acc, val) => acc + val, 0);
    }

    minus(){
        return this.arguments.reduce((acc, val) => acc - val, acc);
    }

    times(){
        return this.arguments.reduce((acc, val) => acc * val, 0);
    }

    divide(){
        if(this.arg1 === 0 || this.arg2 === 0){
            throw new Error("You cannot divide by zero.");
        }
        return this.arguments.reduce((acc, val) => acc / val, acc);
    }
}

export {Calculator}