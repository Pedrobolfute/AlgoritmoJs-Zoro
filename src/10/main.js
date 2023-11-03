//10 - Criar um algoritmo que remova elementos duplicados de um array.

let array = ['Pedro', 'João', 'Zé', 'Maria', 'Gabriel', 'Pedro', 'Nane', 'Zé', 'Maria']
let duplicated = []
let newArray = []

for(let i = 0; i < array.length; i++){
  for(let j = i+1; j < array.length; j++){
    if(array[i] === array[j]){
      duplicated.push(array[i])
    }
  }
}

for(let i = 0; i < array.length; i++){
  let myBool = false
  for(let j = 0; j < duplicated.length; j++){
    if(array[i] === duplicated[j]){
      myBool = true
    }
  }

  if(myBool !== true){
    newArray.push(array[i])
  }
}

console.log(newArray)