const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)

function sortToys(toys, positions) {
  const min = Math.min(...positions)

  return toys.map((_, i) => toys[positions.indexOf(i + min)])

  //-------------------------------------------------------------------------------

  // return toys.sort((a, b) => 
  //   positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  // )

  //-------------------------------------------------------------------------------

  // const min = Math.min(...positions)

  // return toys
  //   .map((e, i) => [e, positions[i] - min])
  //   .sort((a, b) => a[1] - b[1])
  //   .map(e => e[0])

  //-------------------------------------------------------------------------------

  // const t = []
  // const min = Math.min(...positions)

  // positions.forEach((e, i) => t[e - min] = toys[i])

  // return t
}
