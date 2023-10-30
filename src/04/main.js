//4 - Criar um algoritmo que encontra o maior número em um array.

let array = []
let bigger = 0;

for(i = 0; i<=10; i++){
  array[i] = Math.floor(Math.random()*10);
}

for(i = 0; i < array.length; i++){
  if(array[i] > bigger){
    bigger = array[i]
  }
}
console.log(`Array: ${array}`)
console.log(`Bigger Number: ${bigger}`)