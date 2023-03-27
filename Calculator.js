class Calculator{
    constructor(arg1, arg2){
        this._arg1 = arg1;
        this._arg2 = arg2;
        this._accumulator = 0;
    }

    static OperatorType = {
        "Sum" : 1,
        "Minus" : 2,
        "Times" : 3,
        "Divide" : 4
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