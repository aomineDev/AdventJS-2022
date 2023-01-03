printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])

function printTable(gifts) {
  const t1 = Math.max(4, ...gifts.map(e => e.name.length))
  const t2 = Math.max(8, ...gifts.map(e => `${e.quantity}`.length))
  const l = t1 + t2 + 7

  let table = `${'+'.repeat(l)}\n`
    + `| Gift${' '.repeat(t1-4)} | Quantity${' '.repeat(t2-8)} |\n`
    + `| ${'-'.repeat(t1)} | ${'-'.repeat(t2)} |\n`

  gifts.forEach(e => {
    const a = e.name.length
    const b = `${e.quantity}`.length
    table += `| ${e.name}${' '.repeat(t1-a)} `
      + `| ${e.quantity}${' '.repeat(t2-b)} |\n`
  })

  table += `${'*'.repeat(l)}`

  return table
}
