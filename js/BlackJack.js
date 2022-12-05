
let playerScore = 0;
let computerScore = 0;

let playerHand = []
let computerHand = []

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const deckOfCards = [...cards, ...cards, ...cards, ...cards];


function getRandomCard() {
    const randomCard = Math.floor(Math.random() * 51);
    let pickedCard = deckOfCards.splice(randomCard, 1)[0];
    return pickedCard;
}



function startGame() {
    let userChoice = confirm(`Hey you! Lets play a game of Blackjack. What do ya say?`)
    if (userChoice === false) {
        return alert(`Whatever, I didn't want to play with you all that much anyway`)
    } else {
        return letsPlay()
    }


    function letsPlay() {
        console.log(`MAIN MENU`)
        console.log(`Let's play Blackjack!!!`)
        console.log(`Your score: ${playerScore}            Computers score: ${computerScore}`)
        console.log(`Alright let's get started!`)
        getHand()
    }
}


startGame()


function getHand() {
    console.log(`here's your hand`)
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    let card3 = getRandomCard()
    let card4 = getRandomCard()
    let card5 = getRandomCard()
    console.log(card1)
    console.log((card2))
    let hitMe = confirm(`your total is ` + (card1 + card2) + ` would you like another card?`)
    addCard()
    function addCard(){
        let cardTotal = (card1 + card2 + card3)
        if(hitMe === true && cardTotal < 21) {
            console.log(card3)
            let hitMeAgain = confirm(`your total is ` + (card1 + card2 + card3) + ` would you like another card?`)
                if(hitMeAgain === false){
                    winOrLose2()
                }
        }
        else if (hitMe === true && cardTotal > 21){
            console.log(card3)
            alert(`HA! incase you didnt know ${cardTotal} is greater than 21. You lose! better luck next time. `)
            ++computerScore
        }
        else if (hitMe === false) {
            alert (`your total was ` + (card1 + card2) + ` my total was ` + (card4 + card5))
            winOrLose()
        }
        function winOrLose() {
            if((card1 + card2) > (card4 + card5)){
                alert(`UGH ${card1 + card2} is greater than ${card4 + card5}. You win!`)
                ++playerScore
            }
            else if((card1 + card2) === (card4 + card5)){
                alert(`hmm, we both got ${card4 + card5}. Lets call it a tie. I'll give us both a point`)
                ++playerScore
                ++computerScore
            }
            else {
                alert(`BOOM! ${card4 + card5} is greater than ${card1 + card2}. You loose and I win!`)

            }
        }
        function winOrLose2(){
            if((card1 + card2 + card3) > (card4 + card5)){
                alert(`UGH ${card1 + card2 + card3} is greater than ${card4 + card5}. You win!`)
                ++playerScore
            }
            else if((card1 + card2 + card3) === (card4 + card5)){
                alert(`hmm, we both got ${card4 + card5}. Lets call it a tie. I'll give us both a point`)
                ++playerScore
                ++computerScore
            }
            else{
                alert(`BOOM! ${card4 + card5} is greater than ${card1 + card2 + card3}. You loose and I win!`)
                ++computerScore
            }
        }
    }


}



playAgain()
function playAgain(){
    let doAgain = confirm(`Feel like testing your luck again?`)
    if(doAgain === true){
        startGame()
        getHand()
        playAgain()
    }
    else {
        alert(`And I was just stating to have fun. Oh well`)
    }

}