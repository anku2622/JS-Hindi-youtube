const name = "Anku"
const repoCount = 50
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`)
//to declare string
const gameName = new String('Tic Tac Toe')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newString = gameName.substring(0,4)//-ve values are ignored and start with 0
console.log(newString)

const anotherString = gameName.slice(-9, 1)//in slice -ve values are also allowed
console.log(anotherString)

const string ="   Anku    "
console.log(string)
console.log(string.trim())

const url = "https://ankuYadav.com"
console.log(url.replace('Yadav' , '-Goku'))
console.log(gameName.split('*'))