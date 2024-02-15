// 11 - Algoritmo que encontra o segundo maior número em um array.

let array = []
let ordenedArray = []
let bigNum = 0
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 100)
}
const arraySize = array.length
console.log('Array: ' + array)

for (let i = 0; i < arraySize; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[i]) {
      let aux = array[i]
      array[i] = array[j]
      array[j] = aux
    }
  }
}
console.log('Ordened Array: ' + array)
console.log('Result: ' + array[array.length - 1 - 1])