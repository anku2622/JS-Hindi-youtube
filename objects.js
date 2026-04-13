//object literals 
const mySym = Symbol("Key1")
const JsUser = {
    name : "Anku",
    "full name" : "Anku Yadav",//to access this use square brackets 
    age : 18, 
    email : "anku42237@gmail.com",
    location : "Delhi" , 
    lastLoginDays : ["Monday" , "Sunday"],
    [mySym] : "mykey1"
};


console.log(JsUser.name);
console.log(JsUser["full name"]); //Thi is the only way to access when key value is written under double quotes
console.log(JsUser[mySym]);
console.log(JsUser.email);

//to update 
console.log(JsUser.email = "anku@gmail.com");

Object.freeze(JsUser);
console.log(JsUser);
