let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//in js month is start from 0;
let myCreatedDate = new Date(2023 , 0 , 23);
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 1, 10 , 5,5);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023");//jan - 14 - 2023
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long"
});
console.log(newDate);
