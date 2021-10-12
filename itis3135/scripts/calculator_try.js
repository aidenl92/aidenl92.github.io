
var result = "";
var firstOp = true;
var newNumInput = true;
var $ = function(elemId) {
    return document.getElementById(elemId);
}
var num1;
var currOp = "";


function isOperator(x){
    let opArr = ['+','-','*','/'];
    
    for (var i = 0; i < opArr.length; i++){
        if(x == opArr[i]) {
            return true;
        }
    }
    return false;
}


function testFunc1(){
    $('calc-display').innerHTML = 552;
    console.log(parseFloat($('calc-display').innerHTML));
}

function negativeNum(){
    $('calc-display').innerHTML *= -1;
}


function calcClear(){
    firstOp = true;
    num1 = "";
    num2 = "";
    currOp = "";
    newNumInput = true;
    $('calc-display').innerHTML = 0;
}

function decimalButton(){
    if(!($('calc-display').innerHTML.includes('.'))){
        $('calc-display').innerHTML += '.';
    }
    
}

function calcInput(cInput){
    if(isOperator(cInput)){
        if(firstOp){
            firstOp = false;
            currOp = cInput;
            num1 = parseFloat($('calc-display').innerHTML);
            newNumInput = true;
        }
        else{
            $('calc-display').innerHTML = calculateVals();
            num1 = parseFloat($('calc-display').innerHTML)
            currOp = cInput;
            newNumInput = true;
        }
    }
    else{       //input is a number
        if(newNumInput){
            $('calc-display').innerHTML = cInput;
            newNumInput = false;
        }
        else{
            $('calc-display').innerHTML += cInput;
        }
    }
}

function calculateVals(){
    let num2 = parseFloat($('calc-display').innerHTML);
    if(num1 == "" || currOp == ""){
        return num2;
    }
    else{
        switch(currOp){
            case '+':
                return (num1 + num2);
            case '-':
                return (num1 - num2);
            case '*':
                return (num1 * num2);
            case '/':
                return(num1 / num2);
            default:
                return num2;
        }
    }
}

function equalsButton(){
    $('calc-display').innerHTML = calculateVals();
    firstOp = true;
    newNumInput = true;
}

console.log(currOp);
console.log(newNumInput);