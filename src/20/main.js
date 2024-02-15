// 20 - Criar um algoritmo que ordene um array de números em ordem crescente.

let list = []
for (let i = 0; i < 10; i++) {
  list[i] = Math.floor(Math.random() * 100)
}

function toOrder(array) {
  console.log('Antes: ')
  console.log(list)

  for (let i = 0; i < array.length; i++) {
    let aux
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        aux = array[i]
        array[i] = array[j]
        array[j] = aux
      }
    }
  }
  console.log('Depois: ')
  console.log(array)
}
toOrder(list)