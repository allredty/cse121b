/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {

    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector (`#add1`).value);
    let addNumber2 = Number(document.querySelector (`#add2`).value);
    document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
}

document.querySelector(`#addNumbers`).addEventListener (`click`, addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {

    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector (`#subtract1`).value);
    let subtractNumber2 = Number(document.querySelector (`#subtract2`).value);
    document.querySelector(`#difference`).value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector(`#subtractNumbers`).addEventListener (`click`, subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (a, b) => a * b;

const multiplyNumbers = () => {

    let multiplyNumber1 = parseFloat(document.getElementById(`factor1`).value)
    let multiplyNumber2 = parseFloat(document.getElementById(`factor2`).value)
    document.querySelector(`#product`).value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector(`#multiplyNumbers`).addEventListener (`click`, multiplyNumbers);
/* Open Function Use - Divide Numbers */

const divide = (a, b) => a / b;

const divideNumbers = () => {

    let divideNumber1 = parseFloat(document.getElementById(`dividend`).value)
    let divideNumber2 = parseFloat(document.getElementById(`divisor`).value)
    document.querySelector(`#quotient`).value = divide(divideNumber1, divideNumber2);
}

document.querySelector(`#divideNumbers`).addEventListener (`click`, divideNumbers);


/* Decision Structure */

let isMember = document.getElementById('member');
 function newTotal(){
    let subtotal = Number(document.getElementById('subtotal').value);
    if (isMember.checked){
        document.getElementById('total').innerHTML = (subtotal * 0.8).toFixed(2);
    }else{
        document.getElementById('total').innerHTML = subtotal.toFixed(2);
    }
}

//memberCheck.addEventListener('change',newTotal);

document.getElementById('getTotal').addEventListener('click', newTotal)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById(`array`).innerText = numbersArray.join(`, `);

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById(`odds`).innerText = oddNumbers.join(`, `);

/* Output Evens Only Array */
document.getElementById(`evens`).innerHTML = numbersArray.filter(number => number % 2 === 0);



/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(function (element) {
    return element * 2;
});
document.getElementById("multiplied").innerHTML = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;