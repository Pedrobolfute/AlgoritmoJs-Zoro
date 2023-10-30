// 5 - Algoritmo que calcula a média dos elementos em um array de números.

let array = []

for(i = 0; i<=Math.floor(Math.random()*10); i++){
  array[i] = i;
}

let calc = array[array.length-1]/2

console.log(`Elements: ${array}`)
console.log(`Elements half point: ${calc}`)