// 32 - Criar um algoritmo que encontre o dia da semana para uma data específica.

function whatWeekDay(date) {
  date = date.toString()
  if (date.length === 8) {
    let d = {
      day: parseInt(date[0] + date[1]),
      month: parseInt(date[2] + date[3]),
      year: parseInt(date[4] + date[5] + date[6] + date[7])
    }
    let weekName = {
      0: 'Domingo',
      1: 'Segunda',
      2: 'Terça',
      3: 'Quarta',
      4: 'Quinta',
      5: 'Sexta',
      6: 'Sabado'
    }

    let day = new Date(d.year, d.month - 1, d.day).getDay()
    console.log(weekName[day])
  } else {
    console.log('Struct must be: ddmmyyyy')
  }
}
whatWeekDay('10091998')