import {OperatorType} from "./OperatorType.js";

class Calculator{
    constructor(arg1 = -1, arg2 = -1){
        this._arg1 = arg1;
        this._arg2 = arg2;
        this._accumulator = 0;
        this._screen = "0";
        this._operator = OperatorType.None;
    }

    get screen(){
        return this._screen;
    }

    set screen(val){
        this._screen = val;
    }

    get arg1(){
        return this._arg1;
    }

    set arg1(argument1){
        this._arg1 = argument1;
    }

    get arg2(){
        return this._arg2;
    }

    set arg2(argument2){
        this._arg2 = argument2;
    }

    get accumulator(){
        return this._accumulator;
    }

    set accumulator(acc){
        this._accumulator = acc;
    }

    get operator(){
        return this._operator;
    }

    set operator(val){
        this._operator = val;
    }

    sum(){
        return (this.arg1 + this.arg2);
    }

    minus(){
        return (this.arg1 - this.arg2);
    }

    times(){
        return (this.arg1 * this.arg2);
    }

    divide(){
        if(this.arg1 === 0 || this.arg2 === 0){
            throw new Error("You cannot divide by zero.");
        }
        return this.arg1 / this.arg2;
    }
}

export {Calculator}