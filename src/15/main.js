// 15 - Algoritmo que verifica se um número é positivo, negativo ou zero.

function isPositiveNegativeNull(num){
  if(num < 0){
    return 'Negative'
  }else if(num > 0){
    return 'Positive'
  }else{
    return 'Zero'
  }
}
console.log(isPositiveNegativeNull(0))