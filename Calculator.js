const sum = (num1, num2) => {
    return num1 + num2;
}

const minus = (num1, num2) => {
    return num1 - num2;
}

const product = (num1, num2) => {
    return num1 * num2;
}

const remainder = (num1, num2) => {
    if(num1 === 0 || num2 === 0){
        throw new Error("You cannot divide by zero.");
    }
    return num1 / num2;
}

module.exports = {
    sum,
    minus,
    product,
    remainder
}