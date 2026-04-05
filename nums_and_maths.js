const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)
//we can conver Number to String and can apply string property
console.log(balance.toString().length)
console.log(balance.toFixed(2)) 
const otherNumber = 123.890
console.log(otherNumber.toPrecision(2))

const hundreds = 10000000
//it will add comma acc to US
console.log(hundreds.toLocaleString())
//it will do acc to indian 
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++  Maths  +++++++++++++++
console.log(Math)
//absolute value means -ve values become +ve and +ve value remain stay +ve
console.log(Math.abs(-3))
console.log(Math.round(4.2))

//in this thoda sa bhi jaade h 4 se to 5 ho jayega
console.log(Math.ceil(4.2))

console.log(Math.floor(4.2))
console.log(Math.floor(4.9))

// value always comes b/w 0 and 1
console.log(Math.random())