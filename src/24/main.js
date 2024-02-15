// 24 - Criar um algoritmo que converta uma temperatura de Celsius para Fahrenheit.

function celciusToFahrenheit(c){
  c = parseInt(c)
  let result = (c*9/5)+32
  return c + 'C° = ' + result + 'F'
}
console.log(celciusToFahrenheit(10))