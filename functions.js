function sayMyName() {
    console.log("a")
    console.log("n")
    console.log("k")
    console.log("u")
}
// sayMyName //reference
sayMyName() //Execution 

function addTwoNumbers (a , b){  //function definition me jo bhi input lete hai know as parameter 
    console.log(a+b);
}
addTwoNumbers(3,4) // function call ke time jo input dete hai use arguments kehte hai  

// function loggedUser(username){
//     return `${username} just logged in`
// }
// console.log(loggedUser("Anku"));

function userloggedIn(username){
    if(username === undefined){
        console.log("Please enter a username")
        return ;
    }
    return `${username} just logged in `
}
// console.log(userloggedIn());
// console.log(userloggedIn("Anku"));

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400,500));

function calculateCartPrice(val1 , val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400,500));

//how to pass object in function and how we can use?
const user = {
    username : "Anku",
    price : 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); //compulsary hai yaha object hi pass krenge
//direct object bhi pass kr sakte hai jaruri nahi hai banake hi paas krna 
handleObject({
    username : "Aditi",
    price : 900
})

const mynewArray = [200,300,400];
function returnSecondValue (getArray){
    return getArray[1];
}
console.log(returnSecondValue(mynewArray));