"use strict"

let luckyNumber = parseInt(prompt(`Please ender an odd number between 1 and 50`))

function oddsToFifty(luckyNumber){
    for(let i = 1; i < 51; i++){
        if (luckyNumber === i) {
            console.log(`Yikes! We are going to: ${luckyNumber}`);
            i++;
        }
        else {
            console.log("Here is an odd number: " + i);
            i++;
        }
    }
}
oddsToFifty(luckyNumber)