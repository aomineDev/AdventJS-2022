checkPart("uwu")

checkPart("miidim")

checkPart("midu")

function checkPart(part) {
  const x = part.split('')
  const y = part.split('').reverse()
  let index = 0

  const r1 = x.every((e, i) => {
    index = i
    return e === y[i]
  })

  x.splice(index, 1)
  y.splice(index, 1)

  const r2 = x.every((e, i) => e === x[x.length - 1 - i])
  const r3 = y.every((e, i) => e === y[y.length - 1 - i])
  
  return r1 || r2 || r3
}
