const year = 2022
const holidays = ['01/06', '04/01', '12/25']

countHours(year, holidays) 

function countHours(year, holidays) {
  return holidays
  .map(h => new Date(`${h}/${year}`).getDay())
  .filter(h => ![0, 6].includes(h)).length * 2
}
