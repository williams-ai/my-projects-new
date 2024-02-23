let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let message_El = document.getElementById("message-el")
let sum_El = document.getElementById("sum-el")
let cards_El = document.getElementById("cards-el")

function startGame () {
    renderGame()
}

function renderGame(){
    cards_El.textContent = "Cards : " + firstCard + " " + secondCard
    sum_El.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card."
    } else if (sum === 21) {
        message = "Woohoo, you've got BlackJack"
    } else {
        message = "You are out of the game !!!"
        isAlive = false
    }
    message_El.textContent = message
}

function newCard() {
    extraCard = 5
    sum += extraCard
    renderGame () 
}
