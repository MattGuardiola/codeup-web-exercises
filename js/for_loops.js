"use strict"

console.log(`question 1`)

let num = parseInt(prompt(`Please enter a number`))

function showMultiplicationTable(num) {
    for (let i = 1; i < 10; i++) {
        let result = i * num;
        console.log(`${num} * ${i} = ${result}`)
    }
}
showMultiplicationTable(num);





console.log(`question 2`)

function isEvenOrOdd() {
    for (let i = 1; i < 10; i++) {
        let random = Math.floor((Math.random() * 180) + 20);
        if (random % 2 == 0) {
            console.log(`${random} is even`);
        }
        else{
            console.log(`${random} is odd`);
        }
    }
}
isEvenOrOdd();








console.log(`question 3`)

function numberByNumber() {
    for (let i = 1; i < 10; i++) {
        let count = 0;
        for (let j = 1; i > count; j++) {
            console.log(i);
            count++;
        }
    }
}

numberByNumber();







console.log(`question 4`)

function minusFive(){
    for(let i = 1; i < 20; i++)
        console.log(100 - (i * 5))
}
minusFive()