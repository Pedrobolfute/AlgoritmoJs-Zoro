//14 - Criar um algoritmo que encontre o índice de um elemento em um array.
let list = ['a', 'c', 3, 'pietro', '4', 'salomé', 'naninha', 'betin']

function findIndex(array, element){
  array.forEach((e, index) => {
    if(element === e){
      console.log(`${element}: ${index}`)
      return index
    }
  });
}

findIndex(list, 'naninha')