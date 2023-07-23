let cards = []
let hasBlackJack = false  
let isAlive = false 
let message = ""

let btn = document.querySelector('#newCard')
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")  // cs selector type so applicable for all selectors not just id
let cardsEl = document.getElementById("cards-el")

console.log(messageEl)

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    isAlive = true
    btn.innerHTML="New Card"
    Sum = firstCard + secondCard
    renderGame()
    
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i =0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (Sum < 21) {
        message = "Do you want to draw a new card? "
    } else if (Sum === 21) {
        message = "You've got Blackjack! 🎉"
        hasBlackJack = true
        btn.innerHTML = "No Cards ⛔"
    } else {
        message = "You're out of the game! "
        isAlive = false
        btn.innerHTML = "No Cards ⛔"
    }
    sumEl.textContent = "Sum: "+Sum
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        Sum = Sum+card
        cards.push(card)
        console.log(cards)
        renderGame()
    } else{
        messageEl.textContent = "You are out of the Game! You can't play anymore"
        
    }
}

function getRandomCard(){
    let Number =  Math.random()*13
    Number = Math.ceil(Number)
    if(Number===1){
        return 11
    }
    else if(Number >10 ){
        return 10
    }
    return Number;
}