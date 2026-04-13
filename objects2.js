//const tinderUser = new Object()  -> singleton object

const tinderUser = {} //-> Non- singleton object

tinderUser.id = "123abc"
tinderUser.name = "Anku"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Anku",
            lastname : "Yadav"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};

// const obj3 = Object.assign({} , obj1 , obj2);

const obj3 = {...obj1 , ...obj2};  //spread operator
console.log(obj3);

//array of objcets 
const Users = [
    {
        id : "123",
        email : "anku42237@gmail.com"
    },
    {
        id : "123",
        email : "anku42237@gmail.com"
    },
    {
        id : "123",
        email : "anku42237@gmail.com"
    },
]
console.log(Users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));