// 26 - Criar um algoritmo que valide se uma senha atende a critérios de segurança (tamanho mínimo, letras maiúsculas, etc.).

function validatePassword(pass) {
  let count = 0
  if (isBig(pass)) {
    console.log('Size: Ok!')
    count++
  } else { console.log('Yor password is small.') }
  if (isUpperFistLetter(pass)) {
    console.log('UpperCase: Ok!')
    count++
  } else { console.log('The first letter must be UpperCase!') }
  if (isThereLowerCase(pass)) {
    console.log('Lowercase: Ok!')
    count++
  } else { console.log('password must have to be lowerCase!') }

  if (isThereSpecialCaracter(pass)) {
    console.log('Special Character: Ok!')
    count++
  } else { console.log('password must have to be a special caracter!') }

  if (count === 4) {
    console.log('Good Password!!!')
    return true
  } else {
    return false
  }
}

function isBig(pass) {
  const minSize = 8
  if (pass.length < minSize) {
    return false
  } else {
    return true
  }
}

function isUpperFistLetter(pass) {
  let upperCase = false
  const arrAbcUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (let i = 0; i < arrAbcUpperCase.length; i++) {
    if (pass[0] === arrAbcUpperCase[i]) {
      upperCase = true
    }
  }

  if (upperCase) {
    return true
  } else {
    return false
  }
}

function isThereLowerCase(pass) {
  const arrAbcLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let verify = false
  for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < arrAbcLowerCase.length; j++) {
      if (pass[i] === arrAbcLowerCase[j]) {
        return verify = true
      } else {
        verify = false
      }
    }
  }
  return verify
}

function isThereSpecialCaracter(pass) {
  const specialCaracters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '/', '?', '|', '\\', '`', '~']
  let validade = false
  for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < specialCaracters.length; j++) {
      if (pass[i] === specialCaracters[j]) {
        return validade = true
      }
    }
  }
  return validade
}

console.log(validatePassword('Peo@12-.'))