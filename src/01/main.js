// 1 - Criar algoritmo que cria uma lista de elementos HTML.

let body = document.body
let elementNumber = 50

for(let i = 0; i<=elementNumber; i++){
  let div = document.createElement('div')
  body.appendChild(div)
  div.textContent = `${i}/${elementNumber}`
}