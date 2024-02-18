// 29 - Algoritmo que gere a tabela de multiplicação de um número.

function xTable(num){
  for(let i = 0; i <= 10; i++){
    console.log(num + ' * ' + i + ' = ' + num * i)
  }
}
xTable(7)