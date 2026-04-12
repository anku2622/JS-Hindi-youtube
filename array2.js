const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = [ "superman" , "flash" , "batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);

marvel_heros.concat(dc_heros);
console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);
//... -> spread -> array ke 1-1 value individual ho gaya
const all_new_heros = [...marvel_heros , ...dc_heros];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6] , [7,8,[9,10]]];
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Anku")); //it will return false
console.log(Array.from("Anku")) // this will convert the given value into an array

//to convert this we have to tell whether we want to make array from keys or values ? 
console.log(Array.from({name : "Anku"})) //interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));
