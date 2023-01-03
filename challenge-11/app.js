getCompleted('01:00:00', '03:00:00')
getCompleted('02:00:00', '04:00:00')
getCompleted('01:00:00', '01:00:00')
getCompleted('00:10:00', '01:00:00')
getCompleted('01:10:10', '03:30:30')
getCompleted('03:30:30', '05:50:50')

function getCompleted(part, total) {
  const t1 = (part.substring(0, 2) * 3600) 
    + (part.substring(3, 5) * 60) 
    + (part.substring(6, 8) * 1)

  const t2 = (total.substring(0, 2) * 3600) 
    + (total.substring(3, 5) * 60) 
    + (total.substring(6, 8) * 1)

  let a = t1,
  b = t2

  while (b !== 0) {
    let temp = a
    a = b
    b = temp % b
  }

  return `${t1/a}/${t2/a}`
}
