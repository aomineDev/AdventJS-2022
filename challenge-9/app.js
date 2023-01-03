countTime([0, 1, 1, 0, 1]) 

countTime([0, 0, 0, 1]) 

countTime([0, 0, 1, 0, 0])

function countTime(leds) {
  const arr = leds
    .join('')
    .split('1')
    .map(e => e.length)

  arr[0] += arr.pop()

  return Math.max(...arr) * 7
  
  //-------------------------------------------------------------------------------

  // 240 pts - Another solution
  // const arr = [0]

  // leds.forEach(e => {
  //   if (e === 0) arr[arr.length - 1] += 7
  //   if (e === 1) arr.push(0)
  // })

  // arr[0] += arr[arr.length - 1]
  
  // return Math.max(...arr)
}
