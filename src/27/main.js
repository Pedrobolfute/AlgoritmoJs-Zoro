// 27 - Algoritmo que calcule o número de dias entre duas datas.

function daysPassed(startDate, endDate) {
  startDate = startDate.toString()
  endDate = endDate.toString()
  if ((startDate.length === endDate.length) && (startDate.length && endDate.length === 8)) {
    let start = {
      day: parseInt(startDate[0] + startDate[1]),
      month: parseInt(startDate[2] + startDate[3]),
      year: parseInt(startDate[4] + startDate[5] + startDate[6] + startDate[7])
    }
    let end = {
      day: parseInt(endDate[0] + endDate[1]),
      month: parseInt(endDate[2] + endDate[3]),
      year: parseInt(endDate[4] + endDate[5] + endDate[6] + endDate[7])
    }
    let dateOne = new Date(start.year, start.month - 1, start.day)
    let dateTwo = new Date(end.year, end.month - 1, end.day)

    let result = Math.floor((dateTwo - dateOne) / 60 / 60 / 24 / 1000)
    if (result < 0) {
      console.log(result * -1)
    } else {
      console.log(result)
    }
  } else {
    console.log('Structure must be: ddmmyear')
  }
}

daysPassed('10091998', '08072004')