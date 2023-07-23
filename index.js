// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 2;
let secondCard = 3;
// 2. Create a variable, sum, and set it to the sum of the two cards
Sum = firstCard + secondCard;
let hasBlackJack = false  // whether or not user got a Blackjack
let isAlive = true // user is in game or not
let message = "asfg "
if (Sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else if (Sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

console.log(message)

