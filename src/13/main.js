// 13 - Algoritmo que verifica se duas strings são anagramas uma da outra.

let word1 = '1 roma'
let word2 = '1 amor'

function isAnagram(word1, word2) {
  word1 = word1.toLowerCase().split(' ').join('')
  word2 = word2.toLowerCase().split(' ').join('')

  const abc = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0

  }
  const abc2 = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  }

  for (let i = 0; i < word1.length; i++) {
    abc[word1[i]]++
  }
  for (let i = 0; i < word2.length; i++) {
    abc2[word2[i]]++
  }
  if (word1.length === word2.length) {
    for (let i = 0; i < word2.length; i++) {
      if (abc[word1[i]] === abc2[word1[i]]) {
        //Verify 2 objects is awful
      } else {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

console.log(isAnagram(word1, word2))