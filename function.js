// function declaration

function aboutMe(name,age){
    const message = `i am ${name} and i am ${age} years old`;
    console.log(message);
}
// function call
aboutMe('rahul',66);


//default parameters
function calcSum(number1,number2,number3 = 60){
    let sum =   number1 + number2 + number3;
    return sum;
}

console.log(calcSum(10,50));




//arrow function

const calcSumArr = (number1,number2) => number1 + number2;
console.log(calcSumArr(40,30));


// arrow function

const mulByTwoArr = (number1) => number1 *2;
console.log(mulByTwoArr(8));