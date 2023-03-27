import assert from "assert";
import {Calculator} from "../../Calculator.js";

describe("Calculator", () => {
    describe(".Sum", () => {
        it("returns sum of numbers", () => {
            
            let expected = 3;
            let argument1 = 1;
            let argument2 = 2;
            let calculator = new Calculator(argument1, argument2);

            var actual = calculator.sum();

            assert.strictEqual(actual, expected);
        });
    });

    describe(".minus", () => {
        it("returns difference of numbers", () => {
            let expected = 2;
            let argument1 = 6;
            let argument2 = 4;
            let calculator = new Calculator(argument1, argument2);

            var actual = calculator.minus(argument1, argument2);

            assert.strictEqual(actual, expected);
        });
    });

    describe(".product", () => {
        it("returns product of two numbers", () => {
            let expected = 10;
            let argument1 = 2;
            let argument2 = 5;
            let calculator = new Calculator(argument1, argument2);

            let actual = calculator.times(argument1, argument2);

            assert.strictEqual(actual ,expected);
        });
    });

    describe(".remainder", () => {
        it("returns remainder of two numbers", () => {
            let expected = 2;
            let argument1 = 10;
            let argument2 = 5;
            let calculator = new Calculator(argument1, argument2);

            let actual = calculator.divide(argument1, argument2);

            assert.strictEqual(actual, expected);
        });

        it("returns error stating you cannot divide by 0", () => {
            let expected = new Error("You cannot divide by zero.");
            let argument1 = 2;
            let argument2 = 0;
            let calculator = new Calculator(argument1, argument2);
            assert.throws(() => calculator.divide(argument1, argument2), expected);
        });
    });
});