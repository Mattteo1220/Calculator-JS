import {OperatorType} from "./OperatorType.js";

class Calculator{
    constructor(){
        this._arguments = new Array();
        this._screen = "0";
        this._operator = OperatorType.None;
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

    allClear(){
        this._arguments = new Array();
        this._operator = OperatorType.None;
        this._screen = "0";
        this._accumulator = 0;
    }

    reset(){
        this.arguments = [this._accumulator];
        this.operator = OperatorType.None;
    }

    sum(){
        return this.arguments.reduce((acc, val) => acc + val, 0);
    }

    minus(){
        let result = this.arguments[0] - this.arguments[1];
        return result;
    }

    times(){
        return this.arguments[0] * this.arguments[1];
    }

    divide(){
        if(this.arg1 === 0 || this.arg2 === 0){
            throw new Error("You cannot divide by zero.");
        }
        return this.arguments[0] / this.arguments[1];
    }
}

export {Calculator}