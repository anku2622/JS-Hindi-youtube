const user = {
    username : "Anku" ,
    price : 999 ,
    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to website`) //this current context ko refer karega 
        console.log(this)
    }
}
user.WelcomeMessage();
user.username = "sam";
user.WelcomeMessage();

console.log(this); //empty object 

// function chai() {
//     console.log(this);
// }
// chai();

function chai1(){
    let username = "aditi"
    console.log(this.username) // as a function ye aise kaam nhi krta //undefined 
}
chai1()
const chai = function(){
    let username = "Anku"
    console.log(this.username) //undefined 
}
chai()

const hello = () => {
    let username = "Shivam"
    console.log(this.username)  //undefined 
    console.log(this)  //empty object
}
hello();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,5));

//implicit return 
const addTwo = (num1 , num2) => (num1 + num2)
console.log(addTwo(3,5));

//to return object
const hel = () => ({username :"Anku"});
console.log(hel());

//IIFE(Immediately Invoked Function)
//global scope ke pollution ko hatane ke liye IIFE ka use kia
(function chai() {
    console.log('DB connected');
})(); //semicolon is mandatory to end this function or to write 2 IIFE

(function aurCode(){
    //this is named IIFE
    console.log(`DB CONNECTED TWO`)
})();

//as an arrow function 
(() => {
    console.log(`arrow function`)
})();

((name) => {
    console.log(`arrow function ${name}`)
})(`Anku`)
