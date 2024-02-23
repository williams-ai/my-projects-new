let counts = 0
let countEl =  document.getElementById("count_el")
let savedEl =  document.getElementById("saved_el")
let saveEl = document.getElementById("save-el")

function increment() {
    counts = counts + 1
    countEl.textContent = counts
}

function save(){

     let showSave = counts + " - "
     saveEl.textContent += showSave

     countEl.textContent = 0
     counts = 0

}

// let name = "Williams"
// let greeting = "Hi there,"

// function intro(){
//     console.log(greeting + " " + name + "!")
// }

// intro()

let myPoints = 3

function addPoint(){
    console.log(myPoints = myPoints + 3)
}

function removePoint(){
    console.log(myPoints = myPoints - 1)
}

addPoint()
addPoint()
addPoint()
removePoint()
removePoint()

console.log("2" + 2)//22
console.log(11 + 7)//18
console.log(6 + "5")//65
console.log("My Points: " + 5 + 9)//My Points: 59
console.log(2 + 2)//4
console.log("11" + "14")//1114
