// let a = 10 ;
// if(true){
//     let a = 20;
//     const b = 10;
//     console.log("Inner : " , a);
// }
// console.log("Global scope: " , a);

//in nested function , child func can access the variable of parent function
function one(){
    const username = "Anku";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    two() //function call
    // console.log(website); // this will not access becaue two func wala scope wahi tk tha
} 
one()

if(true){
    const username = "Anku"
    if(username === "Anku"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website) ; // it will give error
}
// console.log(username) // give error becoz it is not within the scope

//2 syntax to declare function 
function addOne(num){
    return num + 1;
}
console.log(addOne(5));

function addTwo(num){
    return num + 2;
}
console.log(addTwo(5));