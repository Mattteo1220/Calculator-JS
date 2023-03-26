let Calculator = require("./Calculator");

const screen = document.body.getElementById("screen");
const option = document.body.getElementsByClassName("option");
const operator = document.body.getElementsByClassName("operator");

function changeScreenText(text){
    screen.innerHTML = text;
}

function calculate(){
    
}



module.exports = {
    screen,
    changeScreenText
}