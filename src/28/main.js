// 28 - Criar um algoritmo que calcule o valor de uma potência (exponenciação).

function potency(value, potency){
  let result = 1
  for(let i = 0; i < potency; i++){
    result *= value
  }
  console.log(result)
}
potency(2, 10)