// 7 - Algoritmo que inverte uma string.
let string = 'Pedrobolfute'
let stringInverted
let array = string.split('')
let arrayInverted = []
const arraySize = array.length

for(let i = 0; i < arraySize; i++){arrayInverted[i] = array.pop()}
stringInverted = arrayInverted.join('')

console.log(string)
console.log(stringInverted)