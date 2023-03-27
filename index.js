let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.innerText= count
}


function save() {
    let number = " "  + count +  " "  + "-"
    saveEl.innerText += number
    countEl.innertext = 0
    count = 0
    console.log(count)
}








// let BonusPoints = 50
// console.log(BonusPoints)
// BonusPoints = BonusPoints + 50
// console.log(BonusPoints)
// BonusPoints = BonusPoints - 75
// console.log(BonusPoints)
// BonusPoints = BonusPoints + 45
// console.log(BonusPoints)


// let firstBatch = 5
// let secondBatch= 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 30
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


//intialize the count as 0 
//let count = 0
// listen for clickes
// increment the click
// function increment(){
//console.log("the button is f clicked!!!!")
// }
// function countDown(){
//     console.log(6)
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()
// function logOut(){
//     console.log(42)
// }
// logOut()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sum(){
//     let sum=lap1+lap2+lap3
//     console.log(sum)
// }
// sum()
// let lapCompleted = 0
// function incrementlap(){
//    lapCompleted = lapCompleted + 1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// console.log(lapCompleted)