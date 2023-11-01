// 8 - Criar um algoritmo que conte quantas vezes uma palavra aparece em uma string.

let string = 'Who am I? A painful question. Damn! Why I am here? Why people live? Why I am living yet? Why I was born? Shit!'
let word = 'why'
let count = 0
let array = string.replace(/\?/g, '').replace(/\!/g, '').split(' ')

for(let i = 0; i < array.length; i++){
  if(array[i].toLocaleLowerCase() === word.toLocaleLowerCase()){
    count++
  }
}
console.log(count ,word)