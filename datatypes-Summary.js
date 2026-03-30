//primitive datatypes
//7 types : String ,Number , Boolean , null , undefined , Symbol, BigInt
const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // false

const bigNumber = 35623426625732n


//Reference or (Non primitive data types)

//Arrays , object , Function
let heroes = ["Shaktiman" , "Sharukh khan"]

let myObj = {
    name : "Anku",
    age : 18,
}
let myFunction = function(){
    console.log("Hello world")
}

console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFunction)