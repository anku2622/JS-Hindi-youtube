// let arr = [47,56,78,22,26];
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

//for-of loop
// let cities =["Mumbai" , "Hyderabad" , "Delhi" ];

// for(city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [34,56,89,92];
// let sum = 0;
// for(let i=0 ; i < marks.length ; i++){
//     sum = sum +marks[i];
// }
// let avg = (sum) / marks.length;
// console.log(`Average marks is = ${avg}`);

//for-of loop 
// let marks = [34,56,89,92];
// let sum = 0;
// for(val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`Average of marks = ${avg}`);

//quetion
// let items =[250,600,900,300,50];
// for(let i = 0 ; i<items.length ; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
// }
// console.log(`Items after applied 10% offer = ${items}`);

// console.log("This is a simple log");
// console.error("This is an error");
// console.warn("this is a warning msg!");

// alert("This is alert box");
// let firstName = prompt("Enter your name");
// console.log(firstName);

// let name = prompt("Enter name: ");
// let age = prompt("Enter age: ");
// alert(`${name} is ${age} years old.`);

// let str= prompt("Enter string ");
// if((str[0] =='a' || str[0]=='A') && (str.length>5)){
//     console.log("Golden string");
// }
// else{
//     console.log("Not a golden string");
// }

//largest of 3 number
let a = prompt("enter a");
let b = prompt("enter b");
let c = prompt("enter c");
if(a>b){
    if(a>c){
        console.log(a,"islargest");
    }else{
        console.log(c,"islargest");
    }
}
else
{
    if(b>c)
    {
        console.log(b,"islargest");

    }else{
        console.log(c,"islargest");

    }
}